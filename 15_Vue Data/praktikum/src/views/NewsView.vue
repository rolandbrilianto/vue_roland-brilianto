<template>
  <div class="home">
    <h1>Berita Terkini</h1>
    <NewsList />
  </div>
</template>

<script>
// @ is an alias to /src
import NewsList from "@/components/NewsList.vue";

export default {
  name: "HomeView",
  components: {
    NewsList,
  },
};
</script>
<style>
h1 {
  text-align: center;
}
</style>
