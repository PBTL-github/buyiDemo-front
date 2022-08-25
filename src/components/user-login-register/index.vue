<script lang="ts" setup>
import { useStore } from "vuex";
import { reactive, ref, watch } from "vue";

const store = useStore();

const dialogVisible = ref(false);
const formLabelWidth = "100px";

const formData = reactive({
    username: "",
    password: "",
});

const handleDialogFlag = (flag: boolean) => {
    store.commit("SET_DIALOG_FLAG", flag);
};

watch(
    () => store.state.dialogFormFlag,
    () => {
        dialogVisible.value = store.getters.getDialogFormFlag;
    }
);
</script>

<template>
    <el-dialog
        v-model="dialogVisible"
        title="登陆"
        width="480px"
        center
        :show-close="false"
    >
        <el-form>
            <el-form-item label="用户名：" :label-width="formLabelWidth">
                <el-input
                    type="text"
                    v-model="formData.username"
                    autocomplete="off"
                />
            </el-form-item>
            <el-form-item label="密　码：" :label-width="formLabelWidth">
                <el-input
                    type="text"
                    v-model="formData.password"
                    autocomplete="off"
                />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button type="primary" @click="handleDialogFlag(false)"
                    >确定</el-button
                >
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
