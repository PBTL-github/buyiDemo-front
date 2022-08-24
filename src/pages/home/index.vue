<script lang="ts" setup>
import CarouselDiagram from "./component/CarouselDiagram.vue";
import AuthorMessage from "./component/Author.vue";
import ListUL from "./component/List-UL.vue";
import CountityVue from "./component/Countity.vue";
</script>

<template>
    <div class="home-box">
        <div class="left-block">
            <CarouselDiagram></CarouselDiagram>
            <ListUL></ListUL>
        </div>
        <div class="right-block">
            <AuthorMessage></AuthorMessage>
            <CountityVue></CountityVue>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.home-box {
    & {
        padding: 90px 10px 10px 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .left-block {
        & {
            width: 50%;
        }
        * {
            margin-bottom: 20px;
        }
    }

    .right-block {
        & {
            width: 49%;
        }
        * {
            margin-bottom: 20px;
        }
    }
}

@media only screen and (max-width: 945px) {
    .home-box {
        & {
            display: block;
            padding: 20px 10px 10px 10px;
        }
        .left-block {
            & {
                width: 100%;
            }
        }
        .right-block {
            & {
                width: 100%;
            }
        }
    }
}
</style>
