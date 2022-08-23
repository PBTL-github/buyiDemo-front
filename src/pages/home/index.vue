<script lang="ts" setup>
import CarouselDiagram from "./component/CarouselDiagram.vue";
import AuthorMessage from "./component/Author.vue";
import ListUL from "./component/List-UL.vue";
</script>

<template>
    <div class="home-box">
        <CarouselDiagram></CarouselDiagram>
        <AuthorMessage></AuthorMessage>
        <ListUL></ListUL>
    </div>
</template>

<style lang="scss" scoped>
.home-box {
    & {
        padding: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
}
</style>
