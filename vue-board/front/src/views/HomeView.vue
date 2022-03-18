<template>
  <h1>HomeView</h1>
  <ul class="postBlock">
    <li v-for="post in state.posts" :key="post" class="postBlockItem">
      <h1>{{ post.title }}</h1>
      <p>{{ post.content }}</p>
    </li>
  </ul>
</template>

<script>
import axios from "axios";
import { reactive } from "vue";

export default {
  setup() {
    const state = reactive({
      posts: [],
    });

    return { state };
  },

  async beforeMount() {
    const RESPONSE_SUCCESS = "OK";
    try {
      const response = await axios.get(`http://localhost:4000/`);
      if (response.status === 200 && response.statusText === RESPONSE_SUCCESS) {
        this.state.posts = response.data;
      }
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style></style>
