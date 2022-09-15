import { AxiosResponse } from "axios";
import { ElMessage } from "element-plus";

export interface FormDataModel {
  basic: {
    username: string;
    password: string;
  };
}

const userReg = /^[a-zA-Z0-9]{5,16}$/;
const pawReg = /^[a-zA-Z0-9]{8,16}$/;
export const check = (Data: FormDataModel) => {
  if (userReg.test(Data.basic.username) && pawReg.test(Data.basic.password)) {
    return true;
  } else {
    alert("用户名或密码格式错误");
    return false;
  }
};

// 用户操作返回提示
export const axiosMessage = (res: AxiosResponse<any, any>) => {
  if (res.data.code !== 200) {
    ElMessage.error(res.data.message);
  } else ElMessage({ message: res.data.message, type: "success" });
};
