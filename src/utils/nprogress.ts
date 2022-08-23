import NProgress from "nprogress";
import "nprogress/nprogress.css";

// 配置全局进度条
NProgress.configure({
    easing: "ease", // 动画方式
    speed: 2000, // 递增进度条速度
    showSpinner: false, // 是否显示加载ico
    trickleSpeed: 200, // 自动递增时间
    minimum: 0.3, // 初始化时最小百分比
});

// 打开进度条
export const start = () => {
    NProgress.start();
};

// 关闭进度条
export const close = () => {
    NProgress.done();
};
