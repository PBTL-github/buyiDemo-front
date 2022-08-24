<script lang="ts" setup>
import { ref, Ref } from "vue";

const CountityItems: Ref<string[]> = ref([
    "xxxx",
    "xxxx",
    "xxxx",
    "xxxx",
    "xxxx",
    "xxxx",
]);
</script>

<template>
    <div class="Countity-box">
        <h3>云</h3>
        <div class="Countity-information">
            <span
                class="Countity-content-item"
                v-for="(item, index) in CountityItems"
                :key="index"
                >{{ item }}</span
            >
        </div>
    </div>
</template>

<style lang="scss" scoped>
.Countity-box {
    & {
        width: 100%;
        height: 150px;
        background-color: white;
        border-radius: 10px;
        padding: 5px;
    }

    h3 {
        & {
            border-bottom: solid 1px black;
            color: #3fb884;
            padding-bottom: 5px;
        }
    }

    .Countity-information {
        & {
            margin-top: 10px;
            line-height: 28px;
        }

        .Countity-content-item {
            & {
                margin-right: 20px;
                color: #3fb884;
                cursor: pointer;
            }
        }
    }
}
</style>
