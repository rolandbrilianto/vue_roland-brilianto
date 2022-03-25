<template>
  <li>
    <label v-if="!isEdit">
      {{ todo.list }}
    </label>
    <label v-if="isEdit">
      <input type="text" v-model="inputEdit" />
    </label>
    <button @click="hapusTodo(index)">Hapus</button>

    <button v-if="!isEdit" @click="editTodo">Edit</button>
    <button v-if="isEdit" @click="updateTodo(index)">Update</button>
  </li>
</template>
<script>
export default {
  name: "ItemList",
  data() {
    return {
      isEdit: false,
      inputEdit: "",
    };
  },
  mounted() {
    this.inputEdit = this.todo.list;
  },
  watch: {
    todo(value) {
      this.inputEdit = value.list;
    },
  },
  props: {
    todo: Object,
    index: Number,
  },
  methods: {
    hapusTodo(index) {
      this.$emit("hapus-todo", index);
    },
    editTodo() {
      this.isEdit = !this.isEdit;
    },
    updateTodo(index) {
      this.$emit("update-todo", index, this.inputEdit);
      this.editTodo();
    },
  },
};
</script>
