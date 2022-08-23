<script lang="ts" setup>
import { Ref, ref, watch } from "vue";
import { useRoute, RouteLocationMatched } from "vue-router";

const route = useRoute();
const breadList: Ref<RouteLocationMatched[]> = ref([]);

// 获取路由数据
const getRouteList = async () => {
    let list = route.matched.filter((item) => item.meta && item.meta.title);
    console.log(route.matched);
    const first = list[0];

    if (first == undefined) {
        let newArr = [{ path: "/home", meta: { title: "首页" } } as any];
        list = [...newArr, ...list];
    } else if (first.path !== "/home") {
        let newArr = [{ path: "/home", meta: { title: "首页" } } as any];
        list = [...newArr, ...list];
    }
    // 给面包屑赋值
    breadList.value = list;
    // console.log(breadList.value);
};

getRouteList();
watch(
    () => route.path,
    () => {
        getRouteList();
    }
);
</script>

<template>
    <el-row>
        <el-col :span="18" class="bread-list">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item
                    v-for="(item, index) in breadList"
                    :to="item.path"
                    :key="index"
                >
                    {{ item.meta.title }}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </el-col>
        <el-col :span="6" class="bread-list">
            <el-icon> <wind-power /> </el-icon>消息展示
        </el-col>
    </el-row>
</template>

<style lang="scss" scoped>
.bread-list {
    & {
        display: flex;
        align-items: center;
        padding: 4px;
    }
}
</style>
