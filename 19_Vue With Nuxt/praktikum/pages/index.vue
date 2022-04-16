<template>
  <div>
    <NewsItem v-for="(list, index) in listNews" :key="index" :news="list" />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  computed: {
    listNews() {
      return this.$store.state.NewsList
    },
  },
  mounted() {
    this.getNews()
  },
  methods: {
    getNews() {
      this.$store.dispatch('getNews')
    },
  },
}
</script>
