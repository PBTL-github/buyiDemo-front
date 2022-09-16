<script setup lang="ts">
import HeaDer from "./components/layout/header/index.vue";
import MessageBox from "./components/user-login-register/index.vue";
import Jump from "./components/lazyLoad/Jumping.vue";
import { Ref, ref, watch } from "vue";
import router from "./router";

const isLoadIn: Ref<boolean> = ref(true);

function checkRouterState(isLoadIn: boolean) {
  const preventDefault = function (e: Event) {
    console.log("touch");
    e.preventDefault();
  };
  if (isLoadIn) {
    document.body.style.overflow = "hidden";
    document.addEventListener("touchmove", preventDefault, false);
  } else {
    document.body.style.overflow = "auto";
    document.removeEventListener("touchmove", preventDefault, false);
  }
}

checkRouterState(isLoadIn.value);

router.beforeEach(() => {
  isLoadIn.value = true;
});
router.afterEach(() => {
  setTimeout(() => {
    isLoadIn.value = false;
    window.scrollY = 0;
  }, 1000);
});

watch(isLoadIn, (n: boolean) => {
  console.log(isLoadIn.value);
  checkRouterState(isLoadIn.value);
  window.screenTop = 0;
});
</script>

<template>
  <hea-der></hea-der>
  <MessageBox></MessageBox>
  <Jump v-if="isLoadIn"></Jump>
  <router-view />
</template>

<style lang="scss" scoped></style>
