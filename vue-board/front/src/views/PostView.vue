<template>
  <h1>Post</h1>
  <form @submit.prevent="onSubmit">
    <input
      type="text"
      placeholder="Title"
      :value="state.title"
      @input="updateTitle"
    />
    <textarea
      maxlength="1000"
      placeholder="content"
      @input="updateContent"
    ></textarea>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";
import router from "@/router";

export default {
  setup() {
    const state = reactive({
      title: "",
      content: "",
    });

    const onSubmit = async () => {
      const RESPONSE_SUCCESS = "OK";
      const requestState = {
        title: state.title,
        content: state.content,
      };

      try {
        const response = await axios.post(
          `http://localhost:4000/post`,
          requestState
        );
        if (
          response.status === 200 &&
          response.statusText === RESPONSE_SUCCESS
        ) {
          // redirect home
          router.push("/");
        }
      } catch (error) {
        console.log(error);
      }
    };

    const updateTitle = (e) => {
      state.title = e.target.value;
    };

    const updateContent = (e) => {
      state.content = e.target.value;
    };

    return { state, onSubmit, updateTitle, updateContent };
  },
};
</script>

<style></style>
