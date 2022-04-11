import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);
const persistedDataState = createPersistedState({
  paths: ["listNews"],
});
export default new Vuex.Store({
  plugins: [persistedDataState],
  state: {
    listNews: [],
    // singleNews: [],
  },
  getters: {},
  mutations: {
    setListNews(state, payLoad) {
      state.listNews = payLoad;
    },
    // setNews(state, payLoad) {
    //   // console.log(state.listNews[4]);
    //   state.singleNews = state.listNews.find((item, id) => item[id] == payLoad);
    //   console.log(state.singleNews);
    // },
  },
  actions: {
    fetchNews(store) {
      axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=9ae9cac9efed4439ad6502ab929ab3ec").then((response) => {
        console.log("response", response);
        store.commit("setListNews", response.data.articles);
      });
    },
  },
  modules: {},
});
