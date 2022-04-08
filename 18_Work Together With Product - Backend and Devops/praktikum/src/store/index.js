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
      state.newsDetail = state.lists.find((item) => item.mal_id == param);
      console.log("detil derita " + state.newsDetail);
    },
  },

  actions: {
    fetchListNews(store) {
      const options = {
        method: "GET",
        url: "https://jikan1.p.rapidapi.com/magazine/1/1",
        headers: {
          "X-RapidAPI-Host": "jikan1.p.rapidapi.com",
          "X-RapidAPI-Key": "46d3c84178msh281d7b77c7e4874p105d62jsne72531587932",
        },
      };
      axios
        .request(options)
        .then(function (response) {
          console.log(response.data.manga);
          store.commit("setNews", response.data.manga);
        })
        .catch(function (error) {
          console.error(error);
          store.commit("setError", error.msg);
        });

      // axios
      //   .get(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=9ae9cac9efed4439ad6502ab929ab3ec`)
      //   .then((response) => {
      //     console.log("response: ", response);
      //     // response.data.articles
      //     // store.commit("setNews", response.data.articles);
      //   })
      //   .catch((error) => {
      //     // console.log("error: ", error);
      //     // store.commit("setError", error.msg);
      //   });
    },
    getDetailNews(store, id) {
      store.commit("setDetailNews", id);
      console.log("idnya adalah " + id);
    },
  },
  modules: {},
});
