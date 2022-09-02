<script lang="ts" setup>
import { reactive, Ref, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const infoItem = reactive(store.getters.getArticleItem);

const classify: Ref<string[]> = ref(["vue", "typescript"]);
</script>

<template>
  <div class="info-box">
    <!-- 文章主体 -->
    <div class="info-content">
      <div class="content-title">
        <el-tag class="label">原创</el-tag>
        <el-tag class="label">
          分类：<span
            v-for="(item, index) in classify"
            :key="index"
            class="label-classify"
            >{{ item }}
          </span>
        </el-tag>
      </div>
      <div class="content-item">{{ infoItem.contentDesc }}</div>
    </div>
    <!-- 评论区 -->
    <div class="info-comments">
      <h3 class="comments-title">评论区</h3>
      <!-- 用户品论需替换成组件类似List-LI -->
      <div class="comments-item"></div>
      <div class="comments-btn">发表评论</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info-box {
  & {
    width: 100%;
    padding: 90px 10px 10px 10px;
  }

  div {
    border-radius: 10px;
  }

  .info-content {
    & {
      min-height: 400px;
      background-color: white;
      padding: 10px;
      margin-bottom: 10px;
    }

    .content-title {
      & {
        padding: 5px 0 5px 30px;
        margin-bottom: 20px;
        width: 100%;
        display: flex;
      }

      .label {
        & {
          margin-right: 5px;
        }
        .label-classify {
          & {
            margin-right: 5px;
          }
        }
      }
    }
    .content-item {
      & {
        text-align: start;
        text-indent: 28px;
        line-height: 32px;
      }
    }
  }

  .info-comments {
    & {
      background-color: white;
      padding: 10px 5px;
    }

    .comments-title {
      & {
        color: rgb(82, 189, 11);
        margin-bottom: 20px;
      }
    }
    .comments-btn {
      & {
        display: flex;
        width: 100px;
        height: 40px;
        color: white;
        background-color: rgb(82, 189, 11);
        border-radius: 3px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin: 0 auto;
      }

      &:active {
        background-color: rgb(71, 150, 18);
      }
    }
  }
}
</style>
