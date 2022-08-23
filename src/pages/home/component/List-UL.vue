<script lang="ts" setup>
import { Ref, ref } from "vue";
import ListLI from "./List-LI.vue";

interface ListItemModel {
    ListItem: {
        itemImgUrl: string;
        title: string;
        contentDesc?: string;
    };
}

const ListItems: Ref<ListItemModel[]> = ref([]);

ListItems.value.push({
    ListItem: {
        itemImgUrl: "",
        title: "asdfadfafdsa",
    },
});

ListItems.value.push({
    ListItem: {
        itemImgUrl: "",
        title: "asdfadfafdsa",
    },
});

ListItems.value.push({
    ListItem: {
        itemImgUrl: "",
        title: "asdfadfafdsa",
    },
});

ListItems.value.push({
    ListItem: {
        itemImgUrl: "",
        title: "asdfadfafdsa",
    },
});

ListItems.value.push({
    ListItem: {
        itemImgUrl: "",
        title: "asdfadfafdsa",
    },
});
</script>

<template>
    <div class="ListItem-Box">
        <ListLI></ListLI>
    </div>
</template>

<style lang="scss" scoped></style>
