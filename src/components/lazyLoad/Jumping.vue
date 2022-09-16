<script lang="ts" setup></script>

<template>
  <div class="box">
    <!-- 控制自适应大小范围 -->
    <div class="jumpanim">
      <div class="first"></div>
      <div class="second"></div>
      <div class="third"></div>
      <div class="fourth"></div>
      <div class="fifth"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.box {
  & {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    z-index: 999;
  }
  /* 自适应动画大小 */
  .jumpanim {
    & {
      position: relative;
      width: 15vh;
      height: 15vh;
      top: calc(50% - 15vh / 2);
      left: calc(50% - 15vh / 2);
      transform: rotate(45deg);
    }
    /* 脱离文本流 */
    div {
      position: absolute;
      border-radius: 50%;
      border-bottom: solid 0.4vh rgba(255, 255, 255, 0);
      border-right: solid 0.4vh rgba(255, 255, 255, 0);
    }

    .first {
      width: 100%;
      height: 100%;
      border-top: solid 0.4vh #eb4747;
      border-left: solid 0.4vh #eb4747;
      transform-origin: center;
      animation: Rotating 1.5s 0.92s infinite
        cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }

    .second {
      margin: 5% 5%;
      width: 90%;
      height: 90%;
      border-top: solid 0.4vh #ebeb47;
      border-left: solid 0.4vh #ebeb47;
      transform-origin: center;
      animation: Rotating 1.5s 0.88s infinite
        cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }

    .third {
      margin: 10% 10%;
      width: 80%;
      height: 80%;
      border-top: solid 0.4vh #47eb47;
      border-left: solid 0.4vh #47eb47;
      transform-origin: center;
      animation: Rotating 1.5s 0.84s infinite
        cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }

    .fourth {
      margin: 15% 15%;
      width: 70%;
      height: 70%;
      border-top: solid 0.4vh #47ebeb;
      border-left: solid 0.4vh #47ebeb;
      transform-origin: center;
      animation: Rotating 1.5s 0.77s infinite
        cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }

    .fifth {
      margin: 20% 20%;
      width: 60%;
      height: 60%;
      border-top: solid 0.4vh #4747eb;
      border-left: solid 0.4vh #4747eb;
      transform-origin: center;
      animation: Rotating 1.5s 0.7s infinite
        cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }
  }
}

@keyframes Rotating {
  0% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(390deg);
  }
  85% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
