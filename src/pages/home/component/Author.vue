<script lang="ts" setup>
interface AuthorModel {
    authorName?: string;
    QQ?: string;
    address?: string;
    proDesc?: string;
    motto?: string; //座右铭
}

const initAuthor = (): AuthorModel => {
    return {
        authorName: "XXX",
        QQ: "XXXXXXXXXX",
        address: "保密",
    };
};

const author: AuthorModel = initAuthor();

author.proDesc = "博客";
</script>

<template>
    <div class="author-box">
        <h3>XX博客</h3>
        <div class="author-information">
            作者：{{ author.authorName }}<br />
            QQ:{{ author.QQ }}<br />
            地址:{{ author.address }}<br />
            描述:{{ author.proDesc }}<br />
            <span v-if="author.motto">座右铭：{{ author.motto }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.author-box {
    & {
        width: 49%;
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

    .author-information {
        & {
            margin-top: 10px;
            line-height: 28px;
        }
    }
}
</style>
