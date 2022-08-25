import { server } from "../request";

export const userControl = (
    data: { username: string; password: string },
    model: "register" | "login"
) => {
    return server.request({
        method: "post",
        url: `/user/${model}`,
        data,
    });
};
