<script lang="ts" setup>
import { useRouter } from "vue-router";
import MenuBar from "../menu/menu-bar.vue";
import { ref, Ref } from "vue";
import BreadCrumb from "../bread-crumb/index.vue";

const drawer: Ref<boolean> = ref(false);

const router = useRouter();

const handleOpenMenu = () => {
    drawer.value = !drawer.value;
};

const handleClose = (done: any) => {
    done();
};
</script>

<template>
    <div class="set-common-head-fixed-container">
        <el-row class="common-head-fixed-container">
            <el-col :span="24" class="show-pc">
                <menu-bar></menu-bar>
                <bread-crumb></bread-crumb>
            </el-col>
            <el-col :span="24" class="show-mobile">
                <el-icon class="same-cell" :size="30">
                    <!-- 显示抽屉 -->
                    <expand @click="handleOpenMenu" />
                </el-icon>
            </el-col>
        </el-row>
    </div>

    <!-- 抽屉 -->
    <el-drawer
        v-model="drawer"
        :direction="'rtl'"
        :before-close="handleClose"
        :with-header="false"
        :size="290"
    >
        <!-- 抽屉中的内容 -->
        <menu-bar
            :directionType="'vertical'"
            :showLogo="false"
            :showSearch="false"
        ></menu-bar>
    </el-drawer>
</template>

<style lang="scss" scoped>
@mixin appBaseBox {
    display: flex;
    justify-content: flex-start;
}

.show-pc {
    & {
        display: block;
    }
}
.show-mobile {
    & {
        display: none;
        padding: 0 5px;
        background-color: #2c3e50;
    }
    .same-cell {
        color: #fff;
    }
}

@media only screen and (max-width: 945px) {
    .show-mobile {
        @include appBaseBox();
    }
    .show-pc {
        display: none;
    }
}
</style>
