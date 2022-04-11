<template>
  <div>
    <v-container>
      <v-card class="mx-auto mb-3" max-width="1000">
        <v-img class="white--text align-end" height="300px" :src="singleNews.image_url">
          <v-card-title>{{ singleNews.title }}</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">Score: {{ singleNews.score }} </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>{{ moment(singleNews.publishing_start).format("LL") }}</div>

          <div>{{ singleNews.synopsis }}</div>
        </v-card-text>
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
    getDetailNews(id) {
      this.$store.dispatch("getDetailNews", id);
    },
  },
  created() {
    this.getDetailNews(this.$route.params.id);
  },
};
</script>

<style></style>
