import { createApp } from "vue";
import "./style.css";
import "./assets/style/global.scss";
import router from "./router";
import store from "./store";
import * as ElIcons from "@element-plus/icons";
import { start, close } from "./utils/nprogress";
import App from "./App.vue";
import ElementPlus, { ElNotification } from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App);

// 批量注入icon图标组件
Object.keys(ElIcons).forEach((key) => {
  app.component(key, ElIcons[key]);
});

app.use(store).use(router).use(ElementPlus).mount("#app");

router.beforeEach(async (to, from, next) => {
  start();

  // 路由出错
  if (to.matched.length === 0 && !to.name) {
    ElNotification({
      title: "404 路由地址错误",
      message: `[${to.fullPath}]没有找到路径相对应的页面`,
      type: "error",
      duration: 5000,
    });
    next({ path: "/404" });
  }
  next();
});

// 路由加载结束后
router.afterEach(() => {
  close();
  window.scrollTo(0, 0);
});
