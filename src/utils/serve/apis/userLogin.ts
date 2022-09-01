import { server } from "../request";

/**
 *
 * @param data 请求数据
 * @param model 操作模式， login登入， register注册
 * @returns 返回server请求
 */
export const userControl = (
  data: { username: string; password: string },
  model: "register" | "login"
) => {
  return server.request({
    method: "post",
    url: `/api/user/${model}`,
    data,
  });
};

export const checkToken = (token: string) => {
  return server.request({
    method: "post",
    url: "/api/allowToken",
    data: {
      token: token,
    },
  });
};
