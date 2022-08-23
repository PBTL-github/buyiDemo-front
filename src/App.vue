<script setup lang="ts">
import MenuBar from "./components/layout/menu/menu-bar.vue";
import HeaDer from "./components/layout/header/index.vue";
</script>

<template>
    <!-- <nav>
        <menu-bar></menu-bar>
    </nav> -->
    <hea-der></hea-der>
    <router-view />
</template>

<style lang="scss" scoped></style>
