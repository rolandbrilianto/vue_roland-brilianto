import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedstate from "vuex-persistedstate";
Vue.use(Vuex);

const persistedstate = createPersistedstate({
  paths: ["lists", "error", "newsDetail"],
});
export default new Vuex.Store({
  plugins: [persistedstate],
  state: {
    lists: [],
    error: "",
    newsDetail: [],
  },
  getters: {},
  mutations: {
    setNews(state, param) {
      state.lists = param;
    },
    setError(state, param) {
      state.error = param;
    },
    setDetailNews(state, param) {
      console.log("title param " + param);
      state.newsDetail = state.lists.find((item) => item.title == param);
      console.log("detil derita " + state.newsDetail);
    },
  },
  actions: {
    fetchListNews(store) {
      axios
        .get(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=9ae9cac9efed4439ad6502ab929ab3ec`)
        .then((response) => {
          console.log("response: ", response);
          // response.data.articles
          store.commit("setNews", response.data.articles);
        })
        .catch((error) => {
          console.log("error: ", error);
          store.commit("setError", error.msg);
        });
    },
    getDetailNews(store, title) {
      store.commit("setDetailNews", title);
      console.log("titlenya adalah " + title);
    },
  },
  modules: {},
});
