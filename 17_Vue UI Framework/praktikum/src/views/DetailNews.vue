<template>
  <div>
    <v-container>
      <v-card class="mx-auto mb-3" max-width="1000">
        <v-img class="white--text align-end" height="300px" :src="singleNews.urlToImage">
          <v-card-title>{{ singleNews.title }}</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0"> {{ singleNews.author }} </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>{{ moment(singleNews.publishedAt).format("LL") }}</div>

          <div>{{ singleNews.content }}</div>
        </v-card-text>
        <v-card-actions>
          <v-btn :href="singleNews.url" color="orange" text> Read More</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data: () => ({
    moment: moment,
  }),
  computed: {
    singleNews() {
      return this.$store.state.newsDetail;
    },
  },
  methods: {
    getDetailNews(title) {
      this.$store.dispatch("getDetailNews", title);
    },
  },
  created() {
    this.getDetailNews(this.$route.params.title);
  },
};
</script>

<style></style>
