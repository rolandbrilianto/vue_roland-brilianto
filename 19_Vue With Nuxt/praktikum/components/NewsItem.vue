<template>
  <v-col cols="12" sm="12" md="12" class="pa-1">
    <v-card color="white">
      <v-card-title class="float-left positioning"> 1 </v-card-title>
      <v-card-title class="pl-14 headline relative" style="cursor: pointer">
        <a :href="news.url" target="_blank" style="text-decoration: none">{{
          news.title
        }}</a>
      </v-card-title>
      <v-card-text class="pl-14">
        <span>By : {{ news.author }} | </span>
        <span>{{ $moment(news.publishedAt).startOf('day').fromNow() }} </span>
      </v-card-text>
    </v-card>
  </v-col>
</template>
<script>
export default {
  props: {
    news: Object,
  },
  data() {
    return {
      title: 'Welcome to the Vuetify + Nuxt.js template',
    }
  },

  methods: {
    navigate() {
      this.$nuxt.$options.router.push('/news/' + this.news.title)
    },
  },
}
</script>
<style>
.positioning {
  position: absolute;
  max-height: 100%;
}
.relative {
  position: relative;
}
a {
  color: black;
}
</style>
