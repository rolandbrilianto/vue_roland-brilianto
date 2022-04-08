<template>
  <v-app>
    <div>
      <v-app-bar color="blue" dense dark>
        <v-btn color="blue" elevation="0" @click="goHome">News API</v-btn>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-col cols="12" sm="6" md="3">
          <v-text-field label="Search" v-model="search"></v-text-field>
        </v-col>
      </v-app-bar>
    </div>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  methods: {
    goHome() {
      this.$router.push({
        name: "home",
      });
    },
  },
  data: () => ({}),
};
</script>
