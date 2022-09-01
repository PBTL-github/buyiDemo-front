<script lang="ts" setup>
import { Ref, ref } from "vue";

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
      <div class="content-item">
        习近平总书记指出，让人民生活幸福是“国之大者”。党的十八大以来，以习近平同志为核心的党中央坚持以人民为中心的发展思想，持续夯实民生基础，推动改革发展成果更多、更公平惠及全体人民。
        党的十八大以来，以习近平同志为核心的党中央，始终坚持为中国人民谋幸福，为中华民族谋复兴这一初心使命，把人民放在心中最高位置，用心用情用力，不断筑牢民生底线。
        “人民至上，生命至上”。2020年，面对新冠肺炎疫情突袭，以习近平同志为核心的党中央，坚持不惜一切代价拯救生命，上至百岁老人，下至出生仅30多个小时的婴儿都得到全力救治。面对病毒变异，坚持“动态清零”，始终护佑人民生命健康。
      </div>
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
