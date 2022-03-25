<template>
  <div>
    <ol>
      <ItemList v-for="(Todo, index) in todoList" :key="index" :todo="Todo" :index="index" @update-todo="updateTodo" @hapus-todo="hapusTodo" />
    </ol>
    <input type="text" v-model="Todo" />
    <button @click="addTodo()">Tambahkan</button>
  </div>
</template>
<script>
import ItemList from "@/components/ItemList.vue";
export default {
  name: "TodoList",
  components: {
    ItemList,
  },
  data() {
    return {
      Todo: "",
      todoList: [
        {
          list: "halo selamat belajar",
          edited: 0,
        },

        {
          list: "halo selamat belajar",
          edited: 0,
        },
      ],
    };
  },
  methods: {
    addTodo() {
      if (this.Todo === "") {
        alert("Harap masukan data");
      } else {
        this.todoList.push({ list: this.Todo, edited: 0 });
        this.Todo = "";
        alert("Berhasil Memasukan data");
      }
      //Maaf kak saya bener2 nge stuck di add sampe ga keurus yang lain
    },
    hapusTodo(index) {
      let confirmation = confirm("Are You Sure?");
      if (confirmation) {
        this.todoList.splice(index, 1);
        alert("Data Sucessfully Deleted");
      } else {
        alert("Action canceled");
      }
    },
    updateTodo(index, value) {
      this.todoList[index].list = value;
      alert("Berhasil mengupdate data");
    },
  },
};
</script>
