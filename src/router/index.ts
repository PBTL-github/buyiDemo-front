import { nextTick } from "process";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Unfind from "../pages/404/index.vue";
import * as Api from "../utils/serve/apis/index";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
    // 定义路由为RouteRecordRaw后可以多声明属性在另外一个文件里 路径(../vue-router.d.ts)

    // 在拥有子路由的情况下，父 不能拥有 component 否则会阻挡子路由的component
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../pages/home/index.vue"),
        meta: {
          title: "首页",
          icon: "",
          index: "1",
        },
      },
      {
        path: "/program",
        name: "program",
        component: () => import("../pages/program/index.vue"),
        meta: {
          title: "产品",
          icon: "",
          index: "2",
        },
        children: [
          {
            path: "/program/front",
            name: "program-front",
            component: () => import("../pages/program/front/index.vue"),
            meta: {
              title: "前端",
              icon: "",
              index: "2-1",
            },
          },
          {
            path: "/program/behind",
            name: "program-behind",
            component: () => import("../pages/program/behind/index.vue"),
            meta: {
              title: "后端",
              icon: "",
              index: "2-2",
            },
          },
        ],
      },
      {
        path: "/about",
        name: "about",
        component: () => import("../pages/about/index.vue"),
        meta: {
          title: "关于",
          icon: "",
          index: "3",
        },
      },
      {
        path: "/article",
        name: "article",
        meta: {
          title: "文章",
          index: "4",
        },
        hidden: true,
        // component: () => import("../pages/article/index.vue"), // 可保留生成文章专属页
        children: [
          {
            path: "/article/info",
            name: "article-info",
            component: () => import("../pages/article/info/index.vue"),
            meta: {
              title: "文章详情",
              icon: "",
              index: "3-1",
            },
            beforeEnter: async (to, from) => {
              switch (localStorage.getItem("token")) {
                case null:
                  alert("请进行登录");
                  return "/home";
                  break;

                default:
                  const token = localStorage.getItem("token");
                  await Api.userLogin.checkToken(String(token)).then((res) => {
                    if (!res.data.token) {
                      alert("token出现问题");
                      router.push("/home");
                    }
                  });
                  break;
              }
            },
          },
        ],
      },
    ],
  },
  {
    path: "/404",
    name: "404",
    meta: {
      title: "404",
      icon: "",
    },
    component: Unfind,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
