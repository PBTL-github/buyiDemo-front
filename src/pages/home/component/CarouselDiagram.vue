<script lang="ts" setup>
import { Ref, ref } from "vue";

interface ImgModel {
    banner: {
        url?: string;
        title?: string;
        index?: string | number;
    };
}

const imgList: Ref<ImgModel[]> = ref([]);

imgList.value.push({
    banner: {
        url: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
        index: "1",
    },
});
imgList.value.push({
    banner: {
        url: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
        index: "2",
    },
});
imgList.value.push({
    banner: {
        url: "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
        index: "3",
    },
});
imgList.value.push({
    banner: {
        url: "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
        index: "4",
    },
});
imgList.value.push({
    banner: {
        url: "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
        index: "5",
    },
});
</script>

<template>
    <el-carousel
        indicator-position="outside"
        trigger="click"
        :interval="5000"
        arrow="always"
    >
        <el-carousel-item v-for="(item, index) in imgList" :key="index">
            <div
                class="banner-img"
                :style="{
                    backgroundImage: `url('${item.banner.url}')`,
                }"
            />
        </el-carousel-item>
    </el-carousel>
</template>

<style lang="scss" scoped>
.el-carousel {
    & {
        width: 100%;
        min-width: 450px;
    }

    .el-carousel__item {
        & {
            border-radius: 10px;
        }
        .banner-img {
            & {
                width: 100%;
                height: 100%;
                opacity: 0.75;
                background-position: center center;
            }
        }
    }
}
</style>
