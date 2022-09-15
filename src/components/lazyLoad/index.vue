<script lang="ts" setup></script>

<template>
  <div class="Loadingbox">
    <!-- 加载动画主体 start -->
    <div class="Loadinganim">
      <div class="first">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div class="second">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div class="third">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div class="fourth">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div class="fifth">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div class="sixth">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div class="seventh">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div class="eighth">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div class="nineth">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <!-- 加载动画主体 end -->
  </div>
</template>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.Loadingbox {
  & {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color: white;
  }
  .Loadinganim {
    & {
      position: relative;
      width: 30vw;
      height: 30vw;
      top: calc(50% - 15vh / 2);
      left: calc(50%);
    }
    div {
      /* 大模块响应式长宽度赋予 */
      & {
        position: absolute;
        transform-style: preserve-3d;
        width: 3vw;
        height: 3vw;
      }

      /* 小模块响应式长宽赋予 */
      div {
        & {
          position: absolute;
          width: 3vw;
          height: 3vw;
        }

        /* 小块面颜色 */
        &:nth-child(3) {
          background-color: #47ebeb;
          box-shadow: -20vh 20vh 1.5vh 0.3vh rgb(160, 156, 156);
        }

        &:nth-child(2),
        &:nth-child(1) {
          background-color: #05afd1;
        }

        /* 小块3dDiv旋转平面 */
        &:nth-child(1) {
          transform: translateX(-50%) rotateY(90deg);
        }

        &:nth-child(2) {
          transform: translateZ(1.5vw) perspective(500px);
        }

        &:nth-child(3) {
          transform: translateY(-50%) rotateX(90deg);
        }
      }
    }

    /* one block */
    .first {
      transform: rotateX(-45deg) rotateY(45deg);
      animation: LoadingBlock 1s 0.5s infinite;
    }

    /* two block */
    .second {
      transform: translateX(70%) translateY(49%) rotateX(-45deg) rotateY(45deg);
      animation: LoadingBlock 1s 0.55s infinite;
    }

    /* third block */
    .third {
      transform: translateX(140%) translateY(98%) rotateX(-45deg) rotateY(45deg);
      animation: LoadingBlock 1s 0.6s infinite;
    }

    /* four block */
    .fourth {
      transform: translateX(-70%) translateY(50%) rotateX(-45deg) rotateY(45deg);
      animation: LoadingBlock 1s 0.65s infinite;
    }

    /* fifth block */
    .fifth {
      transform: translateX(0%) translateY(99%) rotateX(-45deg) rotateY(45deg);
      animation: LoadingBlock 1s 0.7s infinite;
    }

    /* six block */
    .sixth {
      transform: translateX(70%) translateY(148%) rotateX(-45deg) rotateY(45deg);
      animation: LoadingBlock 1s 0.75s infinite;
    }

    /* senven block */
    .seventh {
      transform: translateX(-140%) translateY(100%) rotateX(-45deg)
        rotateY(45deg);
      animation: LoadingBlock 1s 0.8s infinite;
    }

    /* eight block */
    .eighth {
      transform: translateX(-70%) translateY(149%) rotateX(-45deg)
        rotateY(45deg);
      animation: LoadingBlock 1s 0.85s infinite;
    }

    /* nine block */
    .nineth {
      transform: translateX(0%) translateY(198%) rotateX(-45deg) rotateY(45deg);
      animation: LoadingBlock 1s 0.9s infinite;
    }
  }
}

@keyframes LoadingBlock {
  0% {
    top: 0%;
  }

  50% {
    top: -10%;
  }

  100% {
    top: 0%;
  }
}
</style>
