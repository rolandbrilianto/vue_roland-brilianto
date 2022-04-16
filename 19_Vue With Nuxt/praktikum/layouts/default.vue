<template>
  <v-app>
    <v-app-bar dark color="#2e495e" :clipped-left="clipped" fixed app>
      <v-toolbar-title
        style="cursor: pointer"
        @click="routing()"
        v-text="title"
      />

      <v-spacer />
    </v-app-bar>
    <v-main class="background">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      title: 'News',
    }
  },
  methods: {
    routing() {
      this.$nuxt.$options.router.push('/')
    },
  },
}
</script>
<style>
.background {
  background-color: #f2f3f5;
}
</style>
