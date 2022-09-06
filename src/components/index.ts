import store from "../store";

// 退出登录
export const exitLogin = () => {
  localStorage.removeItem("token");
  store.state.token = undefined;
};
