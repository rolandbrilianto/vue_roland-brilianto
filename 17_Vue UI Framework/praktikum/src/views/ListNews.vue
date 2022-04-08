<template>
  <v-container>
    <v-card class="mx-auto mb-3" max-width="700" v-for="(news, index) in listNews" :key="index">
      <v-img class="white--text align-end" height="300px" :src="news.urlToImage">
        <v-card-title>{{ news.title }}</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0"> {{ news.author }} </v-card-subtitle>

      <v-card-text class="text--primary">
        <div>{{ moment(news.publishedAt).format("LL") }}</div>

        <div>{{ news.description }}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn :to="{ name: 'detail', params: { title: news.title } }" color="orange" text> Read </v-btn>
      </v-card-actions>
    </v-card>
    <!--  -->
  </v-container>
</template>

<script>
import moment from "moment";
export default {
  data: () => ({
    moment: moment,
  }),
  name: "ListNews",
  computed: {
    listNews() {
      return this.$store.state.lists;
    },
    errorMessage() {
      if (this.$store.state.error !== "") {
        return true;
      }
      return false;
    },
  },
  methods: {
    getNews() {
      this.$store.dispatch("fetchListNews");
    },
  },
  mounted() {
    this.getNews();
  },
};
</script>
