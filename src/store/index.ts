import { createStore } from "vuex";
import router from "../router";

export default createStore({
    state: {
        currnMenu: localStorage.getItem("currnMenu") || "1",
    },
    getters: {
        getCurrentMenu: (state) => {
            return state.currnMenu;
        },
    },
    mutations: {
        SET_CURRENT_MENU(state, currentMenu: string) {
            localStorage.setItem("currnMenu", currentMenu);
            state.currnMenu = currentMenu;
        },
    },
    actions: {},
    modules: {},
});
