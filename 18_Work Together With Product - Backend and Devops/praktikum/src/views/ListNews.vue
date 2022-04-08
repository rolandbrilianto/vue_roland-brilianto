<template>
  <v-container>
    <v-row no-gutters>
      <v-col v-for="(news, index) in listNews" :key="index" cols="12" sm="2" class="mr-6"
        ><v-card class="mx-auto mb-3">
          <v-img class="white--text align-end" height="300px" :src="news.image_url">
            <v-card-title>{{ news.title }}</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">Rating : {{ news.score }} </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{ moment(news.publishing_start).format("LL") }}</div>

            <div>
              <B>{{ news.title }}</B>
            </div>
          </v-card-text>

          <v-card-actions>
            <v-btn :to="{ name: 'detail', params: { id: news.mal_id } }" color="orange" text> Read </v-btn>
          </v-card-actions>
        </v-card></v-col
      >
    </v-row>

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
