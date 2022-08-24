<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
    ListItems: {
        type: Object,
    },
});

const handelMore = () => {
    router.push("/article/info");
};
</script>

<template>
    <div v-for="(item, index) in ListItems" :key="index" class="List-item-box">
        <!-- {{ item.ListItem.title }} -->
        <div class="List-item-content-box">
            <div
                class="item-img"
                :style="{
                    backgroundImage: `url('${item.ListItem.itemImgUrl}')`,
                }"
            />

            <div class="item-content">
                <h3 class="content-title">{{ item.ListItem.title }}</h3>
                <div class="content-text">{{ item.ListItem.contentDesc }}</div>
            </div>
        </div>
        <div class="author-infermation-box">
            <div class="item-btn-more" @click="handelMore">
                <el-icon><View /></el-icon>阅读全文
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.List-item-box {
    & {
        position: relative;
        width: 100%;
        height: 130px;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-bottom: 20px;
        border-radius: 5px;
        padding: 10px;
    }

    &:hover {
        .content-title {
            color: rgb(17, 167, 117);
        }
    }

    .List-item-content-box {
        & {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            height: 70%;
        }

        .item-img {
            & {
                width: 20%;
                height: 90%;
                border-radius: 3px;
            }
        }

        .item-content {
            & {
                width: 79%;
                height: 80%;
            }
        }
    }
    .author-infermation-box {
        & {
            width: 80%;
            height: 25%;
            margin-left: 20%;
        }
        .item-btn-more {
            & {
                float: right;
                display: flex;
                width: 100px;
                height: 100%;
                color: white;
                background-color: rgb(82, 189, 11);
                border: none;
                border-radius: 3px;
                justify-content: center;
                align-items: center;
                cursor: pointer;
            }

            &:active {
                background-color: rgb(71, 150, 18);
            }
        }
    }
}
</style>
