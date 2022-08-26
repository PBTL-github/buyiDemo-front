import axios from "axios";

const server = axios.create({
    baseURL: `http://localhost:5173`,
});

//请求拦截器
server.interceptors.request.use(
    (config) => {
        console.log(config);
        return config;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);

//响应拦截器
server.interceptors.response.use(
    (res) => {
        if (res.status !== 200) {
            return Promise.reject(new Error(`response code: ${res.status}`));
        }
        return res;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export { server };
