<template>
  <div id="app">
    <ToDoApp />
  </div>
</template>

<script>
import ToDoApp from "./components/ToDoApp.vue";

export default {
  name: "App",
  components: {
    ToDoApp,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
