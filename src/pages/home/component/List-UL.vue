<script lang="ts" setup>
import { reactive, Ref, ref } from "vue";
import ListLI from "./List-LI.vue";

export interface ListItemModel {
  ListItem: {
    itemImgUrl: string;
    title: string;
    contentDesc?: string;
  };
}

const ListItems: ListItemModel[] = reactive<ListItemModel[]>([]);

ListItems.push({
  ListItem: {
    itemImgUrl:
      "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
    contentDesc:
      "习近平总书记指出，让人民生活幸福是“国之大者”。党的十八大以来，以习近平同志为核心的党中央坚持以人民为中心的发展思想，持续夯实民生基础，推动改革发展成果更多、更公平惠及全体人民。\
        党的十八大以来，以习近平同志为核心的党中央，始终坚持为中国人民谋幸福，为中华民族谋复兴这一初心使命，把人民放在心中最高位置，用心用情用力，不断筑牢民生底线。\
        “人民至上，生命至上”。2020年，面对新冠肺炎疫情突袭，以习近平同志为核心的党中央，坚持不惜一切代价拯救生命，上至百岁老人，下至出生仅30多个小时的婴儿都得到全力救治。面对病毒变异，坚持“动态清零”，始终护佑人民生命健康。",
    title: "asdfadfafdsa",
  },
});

ListItems.push({
  ListItem: {
    itemImgUrl:
      "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
    contentDesc:
      "asdfasdfasfdasfdaf asdfasfda adsfasfdasdf asdfasfdafa asdfdasfafd asfdasfdasdfa afdasdfasdf asdfasf ",
    title: "asdfadfafdsa",
  },
});

ListItems.push({
  ListItem: {
    itemImgUrl:
      "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
    contentDesc:
      "asdfasdfasfdasfdaf asdfasfda adsfasfdasdf asdfasfdafa asdfdasfafd asfdasfdasdfa afdasdfasdf asdfasf ",
    title: "asdfadfafdsa",
  },
});

ListItems.push({
  ListItem: {
    itemImgUrl:
      "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
    contentDesc:
      "asdfasdfasfdasfdaf asdfasfda adsfasfdasdf asdfasfdafa asdfdasfafd asfdasfdasdfa afdasdfasdf asdfasf ",
    title: "asdfadfafdsa",
  },
});

ListItems.push({
  ListItem: {
    itemImgUrl:
      "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
    contentDesc:
      "asdfasdfasfdasfdaf asdfasfda adsfasfdasdf asdfasfdafa asdfdasfafd asfdasfdasdfa afdasdfasdf asdfasf ",
    title: "asdfadfafdsa",
  },
});

ListItems.push({
  ListItem: {
    itemImgUrl:
      "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
    contentDesc:
      "asdfasdfasfdasfdaf asdfasfda adsfasfdasdf asdfasfdafa asdfdasfafd asfdasfdasdfa afdasdfasdf asdfasf ",
    title: "asdfadfafdsa",
  },
});
</script>

<template>
  <div class="ListItem-Box">
    <!-- 列表组件 -->
    <div class="li-box" v-for="(item, idx) in ListItems" :key="idx">
      <ListLI :ListItems="item"></ListLI>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ListItem-Box {
  & {
    width: 100%;
  }

  .li-box {
    & {
      width: 100%;
      margin-bottom: 20px;
    }
  }
}
</style>
