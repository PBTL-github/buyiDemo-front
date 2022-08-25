<script setup lang="ts">
import HeaDer from "./components/layout/header/index.vue";
import MessageBox from "./components/user-login-register/index.vue";
</script>

<template>
    <!-- <nav>
        <menu-bar></menu-bar>
    </nav> -->
    <hea-der></hea-der>
    <MessageBox></MessageBox>
    <router-view />
</template>

<style lang="scss" scoped></style>
