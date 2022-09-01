<script lang="ts" setup>
import { useStore } from "vuex";
import { reactive, ref, watch } from "vue";
import { FormDataModel, check } from "./index";
import * as Api from "../../utils/serve/apis/index";

const store = useStore();

const dialogFormVisible = ref(false); //验证窗口是否显示
const LoginTitle = ref("登入");
const formLabelWidth = "100px";

const formData: FormDataModel = reactive({
  basic: {
    username: "",
    password: "",
  },
});

const handleDialogFlag = (flag: boolean) => {
  store.commit("SET_DIALOG_FLAG", flag);
};
watch(
  () => store.state.dialogFormFlag,
  () => {
    dialogFormVisible.value = store.getters.getDialogFormFlag;
  }
);

const submitBtn = () => {
  // 校验格式
  if (check(formData)) {
    //基础验证
    if (LoginTitle.value == "登入") {
      // checkToken(formData);
      Api.userLogin.userControl(formData.basic, "login").then((res) => {
        alert(res.data.message);
        store.commit("SET_ITEM_LOCALSTORAGE", res.data.token);
      });
    } else if (LoginTitle.value == "注册") {
      Api.userLogin.userControl(formData.basic, "register").then((res) => {
        alert(res.data.message);
      });
    }

    // token验证
    handleDialogFlag(false);
  }
  formData.basic.username = "";
  formData.basic.password = "";
};
watch(
  () => store.state.LoginTitle,
  () => {
    LoginTitle.value = store.getters.getLoginTitle;
  }
);
</script>

<template>
  <el-dialog
    v-model="dialogFormVisible"
    :title="LoginTitle"
    width="480px"
    center
    @close="handleDialogFlag(false)"
  >
    <el-form :model="formData.basic">
      <el-form-item label="用户名：" :label-width="formLabelWidth">
        <el-input
          type="text"
          v-model="formData.basic.username"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item label="密　码：" :label-width="formLabelWidth">
        <el-input
          type="text"
          v-model="formData.basic.password"
          autocomplete="off"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="submitBtn">确定</el-button>
        <el-button @click="handleDialogFlag(false)">取消</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
.el-button--text {
  margin-right: 15px;
}
.el-input {
  width: 300px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
