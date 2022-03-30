import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listNews: [],
    singleNews: [],
  },
  getters: {},
  mutations: {
    setListNews(state, payLoad) {
      state.listNews = payLoad;
    },
    setNews(state, payLoad) {
      // console.log(state.listNews[4]);
      state.singleNews = state.listNews.find((item, id) => item[id] == payLoad);
      console.log(state.singleNews);
    },
  },
  actions: {
    fetchNews(store) {
      axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=9ae9cac9efed4439ad6502ab929ab3ec").then((response) => {
        console.log("response", response);
        store.commit("setListNews", response.data.articles);
      });
    },

    getSingleNews(store, id) {
      store.commit("setNews", id);
    },
  },
  modules: {},
});
