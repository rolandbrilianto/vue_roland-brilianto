<template>
  <div class="hello">
    <h1>tes{{ beritaTunggal.title }}</h1>
    <img :src="beritaTunggal.urlToImage" />
  </div>
</template>

<script>
export default {
  name: "SingleNews",

  computed: {
    beritaTunggal() {
      return this.$store.state.singleNews;
    },
  },
  methods: {
    getBerita(id) {
      this.$store.dispatch("getSingleNews", id);
    },
  },
  created() {
    this.getBerita(this.$route.params.id);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
