import { createStore } from "vuex";

export default createStore({
    state: {
        currnMenu: localStorage.getItem("currnMenu") || "1",
        dialogFormFlag: false,
        LoginTitle: "",
    },
    getters: {
        getCurrentMenu: (state) => {
            return state.currnMenu;
        },
        getDialogFormFlag: (state) => {
            return state.dialogFormFlag;
        },
        getLoginTitle: (state) => {
            return state.LoginTitle;
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
        SET_LOGIN_TITLE(state, model: string) {
            state.LoginTitle = model;
        },
    },
    actions: {},
    modules: {},
});
