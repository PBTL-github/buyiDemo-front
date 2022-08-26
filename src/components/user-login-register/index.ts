import { Ref, ref } from "vue";

class UserLoginRegister {
    public dialogVisible: Ref<boolean> = ref(false);

    public handleDialogFlag = (flag: boolean): void => {
        this.dialogVisible.value = flag;
    };

    public getDialogVisible = () => {
        console.log(this.dialogVisible.value);

        return this.dialogVisible.value;
    };
}

const userLoginRegister = new UserLoginRegister();

export default userLoginRegister;
