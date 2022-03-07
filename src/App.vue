<template>
  <div id="app">
    <h1>TodoList</h1>
    <ul>
      <li v-for="item in ToDoItems" :key="item.id">
        <to-do-item
          :label="item.label"
          :done="item.done"
          :id="item.id"
        ></to-do-item>
      </li>
    </ul>
  </div>
</template>

<script>
import ToDoItem from "./components/ToDoItem.vue";

export default {
  name: "App",
  components: {
    ToDoItem,
  },
  data() {
    return {
      ToDoItems: [
        { id: 1, label: "Learn Vue", done: false },
        { id: 2, label: "Create a Vue project with the CLI", done: true },
        { id: 3, label: "Have fun", done: true },
        { id: 4, label: "Create a to-do list", done: false },
      ],
    };
  },
};
</script>
