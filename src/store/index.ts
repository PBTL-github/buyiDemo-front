import { createStore } from "vuex";

export default createStore({
    state: {
        currnMenu: localStorage.getItem("currnMenu") || "1",
        dialogFormFlag: false,
    },
    getters: {
        getCurrentMenu: (state) => {
            return state.currnMenu;
        },
        getDialogFormFlag: (state) => {
            return state.dialogFormFlag;
        },
    },
    mutations: {
        SET_CURRENT_MENU(state, currentMenu: string) {
            localStorage.setItem("currnMenu", currentMenu);
            state.currnMenu = currentMenu;
        },
        SET_DIALOG_FLAG(state, flag: boolean) {
            state.dialogFormFlag = flag;
        },
    },
    actions: {},
    modules: {},
});
