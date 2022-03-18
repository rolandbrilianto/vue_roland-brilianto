<template>
  <div id="app">
    <ol>
      <li v-for="items in todos" :key="items.id">{{ items }}</li>
    </ol>
    <input type="text" v-model="todo" />
    <input type="submit" value="Tambahkan" @click="TambahToDo(todo)" /> <br />
    <p v-if="todos.length >= 4">Hebat!</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      todo: "",
      todos: [],
    };
  },
  methods: {
    TambahToDo(todo) {
      this.todos.push(todo);
      this.todo = "";
    },
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
