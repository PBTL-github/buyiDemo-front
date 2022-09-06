import store from "../../store";

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
