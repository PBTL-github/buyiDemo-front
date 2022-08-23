<script lang="ts" setup>
import { ref, Ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();

interface Props {
    showLogo?: boolean;
    showSearch?: boolean;
    directionType?: "vertical" | "horizontal";
}
withDefaults(defineProps<Props>(), {
    directionType: "horizontal",
    showLogo: true,
    showSearch: true,
});

// const activeIndex2: Ref<string> = store.getters.getCurrentMenu || ref("1");

// 获取子路由
const menuList = router.options.routes[0].children;

const handleSelect = (key: string, keyPath: string[]) => {
    store.commit("SET_CURRENT_MENU", key);
};

const handleRoute = (item: any) => {
    router.push(item.path);
};
</script>

<template>
    <div class="nav-menu-wrapper">
        <div v-if="showLogo" class="el-menu el-menu--horizontal logo-box">
            <img
                src="../../../assets/company_logo_for_dark.9d4b8998.png"
                alt="图片"
                title="欢迎"
                class="set-img"
            />
        </div>
        <el-menu
            :default-active="String($route.meta.index)"
            class="menu-box"
            :mode="directionType"
            background-color="#2c3e50"
            text-color="#fff"
            active-text-color="#ffd04b"
            @select="handleSelect"
        >
            <template v-for="(item, index) in menuList" :key="item.path">
                <template v-if="!item.children">
                    <el-menu-item
                        :index="String(item.meta?.index)"
                        @click="handleRoute(item)"
                    >
                        {{ item.meta?.title }}
                    </el-menu-item>
                </template>

                <template v-else>
                    <el-sub-menu :index="String(item.meta?.index)">
                        <template #title>{{ item.meta?.title }}</template>
                        <el-menu-item
                            :index="String(subItem.meta?.index)"
                            v-for="(subItem, index) in item.children"
                            :key="subItem.path"
                            @click="handleRoute(subItem)"
                        >
                            {{ subItem.meta?.title }}
                        </el-menu-item>
                    </el-sub-menu>
                </template>
            </template>
        </el-menu>
        <div class="el-menu el-menu--horizontal combine-btn-box">
            <span class="child-item">登录</span>
            <span class="child-item">注册</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "./style.scss";
</style>
