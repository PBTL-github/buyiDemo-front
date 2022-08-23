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
            "asdfasdfasfdasfdaf asdfasfda adsfasfdasdf asdfasfdafa asdfdasfafd asfdasfdasdfa afdasdfasdf asdfasf ",
        title: "asdfadfafdsa",
    },
});

ListItems.push({
    ListItem: {
        itemImgUrl:
            "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
        title: "asdfadfafdsa",
    },
});

ListItems.push({
    ListItem: {
        itemImgUrl:
            "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
        title: "asdfadfafdsa",
    },
});

ListItems.push({
    ListItem: {
        itemImgUrl:
            "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
        title: "asdfadfafdsa",
    },
});

ListItems.push({
    ListItem: {
        itemImgUrl:
            "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
        title: "asdfadfafdsa",
    },
});
</script>

<template>
    <div class="ListItem-Box">
        <ListLI :ListItems="ListItems"></ListLI>
    </div>
</template>

<style lang="scss" scoped>
.ListItem-Box {
    width: 50%;
    background-color: white;
    padding: 10px;
    border-radius: 10px;
}
</style>
