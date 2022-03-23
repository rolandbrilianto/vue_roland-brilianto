<template>
  <div id="todoApp">
    <div id="list">
      <ol>
        <li v-for="(items, index) in todos" :key="items.index" id="list-li">
          {{ items }}
          <div v-if="indexSelected === index" id="list-edit">
            <input type="text" v-model="editTodo" /><br />
            <button @click="UpdateToDo()">Update</button>
          </div>
          <div v-if="isEdited" id="list-edit"><button @click="EditTodo(index, items)">Edit</button></div>

          <button id="list-edit" @click="DeleteTodo(index)">Delete</button>
        </li>
      </ol>
    </div>

    <input id="textInputAdd" type="text" v-model="todo" />
    <input type="submit" value="Tambahkan" @click="TambahToDo(todo)" /> <br />
    <p v-if="todos.length >= 4">Hebat!</p>
  </div>
</template>
<script>
export default {
  name: "ToDoApp",

  data() {
    return {
      isEdited: true,
      editTodo: "",
      isAdd: false,
      todo: "",
      todos: [],
      indexSelected: null,
    };
  },
  methods: {
    TambahToDo(todo) {
      if (this.todo === "") {
        alert("Masukan Isinya");
      } else {
        this.todos.push(todo);
        alert(`Berhasil menambah data ${this.todo}`);
        this.todo = "";
      }
    },
    EditTodo(index, items) {
      this.editTodo = items;
      this.indexSelected = index;
      this.isEdited = false;
    },
    UpdateToDo() {
      if (this.editTodo === "") {
        alert("Tidak bisa memasukan kosong");
      } else {
        this.todos[this.indexSelected] = this.editTodo;
        this.editTodo = "";
        this.indexSelected = null;
        this.isEdited = true;
        alert("Berhasil Memperbaharui");
      }
    },
    DeleteTodo(index) {
      let confirmation = confirm("Are You Sure?");
      if (confirmation) {
        this.todos.splice(index, 1);
        alert("Data Sucessfully Deleted");
      } else {
        alert("Action canceled");
      }
    },
  },
};
</script>
<style>
#textInputAdd {
  margin-right: 10px;
  width: 90%;
}
#list-li {
  margin-bottom: 10px;
}
</style>
