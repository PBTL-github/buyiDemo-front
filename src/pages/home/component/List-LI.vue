<script lang="ts" setup>
import { Ref } from "vue";
import { ListItemModel } from "./List-UL.vue";

const props = defineProps({
    ListItems: {
        type: Object,
    },
});
</script>

<template>
    <div v-for="(item, index) in ListItems" :key="index" class="List-item-box">
        <!-- {{ item.ListItem.title }} -->
        <div
            class="item-img"
            :style="{ backgroundImage: `url('${item.ListItem.itemImgUrl}')` }"
        />

        <div class="item-content">
            <h3 class="content-title">{{ item.ListItem.title }}</h3>
            <div class="content-text">{{ item.ListItem.contentDesc }}</div>
        </div>
        <button>
            <el-icon><View /></el-icon>阅读全文
        </button>
    </div>
</template>

<style lang="scss" scoped>
.List-item-box {
    & {
        width: 100%;
        height: 100px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .item-img {
        & {
            width: 20%;
            height: 80%;
        }
    }

    .item-content {
        & {
            width: 79%;
            height: 80%;
        }
    }
}
</style>
