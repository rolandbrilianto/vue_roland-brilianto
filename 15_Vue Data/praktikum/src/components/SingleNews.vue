<template>
  <div class="hello">
    <h1>{{ detailNews.title }}</h1>
    <img :src="detailNews.urlToImage" />
    <p>{{ detailNews.content }}</p>
    <button><a :href="detailNews.url">Lanjut Baca</a></button>
  </div>
</template>

<script>
export default {
  name: "SingleNews",

  computed: {
    detailNews() {
      return this.$store.state.listNews.find((item) => item.title === this.$route.params.title);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
img {
  max-width: 400px;
  display: block;
  object-fit: cover;
  margin-left: auto;
  margin-right: auto;
}
</style>
