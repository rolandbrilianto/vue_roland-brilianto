const state = {
  NewsList: [],
  DetailNews: [],
}

const mutations = {
  setNews(state, param) {
    state.NewsList = param
  },
  setDetailNews(state, param) {
    console.log('title param ' + param)
    state.DetailNews = state.NewsList.find((item) => item.title === param)
    console.log('detil derita ' + state.DetailNews)
  },
}

const actions = {
  getNews(store) {
    this.$axios
      .get(
        `https://newsapi.org/v2/everything?q=bitcoin&apiKey=2855be0bd75a436cb0f78dd5e74313cf`
      )
      .then((response) => {
        console.log('fetchListNews set global state')
        store.commit('setNews', response.data.articles) // ambil dari sini
      })
      .catch((error) => {
        store.commit('setError', error.msg)
      })

    // store.commit("setNews", response); // ambil dari sini
  },
  getDetailNews(store, title) {
    store.commit('setDetailNews', title)
    console.log('titlenya adalah ' + title)
  },
}

export default { state, mutations, actions }
