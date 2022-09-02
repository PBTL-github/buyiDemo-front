<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import * as Api from "../../../utils/serve/apis/index";

const router = useRouter();
const store = useStore();

const props = defineProps({
  ListItems: {
    type: Object,
  },
});

const handelMore = () => {
  router.push("/article/info");
  if (localStorage.getItem("token")) {
    const token = localStorage.getItem("token");
    Api.userLogin.checkToken(String(token)).then((res) => {
      if (res.data.token) {
        store.commit("SET_ARTICLE_LIST_ITEM", props.ListItems?.ListItem);
      }
    });
  }
};
</script>

<template>
  <div class="List-item-box">
    <!-- {{ item.ListItem.title }} -->
    <div class="List-item-content-box">
      <div
        class="item-img"
        :style="{
          backgroundImage: `url('${ListItems?.ListItem.itemImgUrl}')`,
        }"
      />

      <div class="item-content">
        <h3 class="content-title">{{ ListItems?.ListItem.title }}</h3>
        <div class="content-text">{{ ListItems?.ListItem.contentDesc }}</div>
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
    justify-content: space-between;
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
      justify-content: space-between;
      height: 70%;
    }

    .item-img {
      & {
        width: 20%;
        height: 100%;
        border-radius: 3px;
      }
    }

    .item-content {
      & {
        width: 78%;
        height: 80%;
      }

      .content-text {
        & {
          width: 100%;
          height: 90%;
          overflow: hidden;
          text-align: left;
          line-height: 28px;
        }
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
