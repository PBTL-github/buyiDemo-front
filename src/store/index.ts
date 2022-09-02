import { createStore } from "vuex";

export default createStore({
  state: {
    currnMenu: localStorage.getItem("currnMenu") || "1",
    dialogFormFlag: false,
    LoginTitle: "",

    token: localStorage.getItem("token") || undefined,

    articleListItem: {
      itemImgUrl:
        "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
      contentDesc:
        "asdfasdfasfdasfdaf asdfasfda adsfasfdasdf asdfasfdafa asdfdasfafd asfdasfdasdfa afdasdfasdf asdfasf ",
      title: "asdfadfafdsa",
    },
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
    getToken: (state) => {
      return state.token;
    },
    getArticleItem: (state) => {
      return state.articleListItem;
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
    SET_ITEM_LOCALSTORAGE(state, token: string) {
      localStorage.setItem("token", token);
      state.token = token;
    },
    SET_ARTICLE_LIST_ITEM(state, listItem: any) {
      console.log(state.articleListItem);
      state.articleListItem = listItem;
    },
  },
  actions: {},
  modules: {},
});
