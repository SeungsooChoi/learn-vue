<template>HomeView</template>

<script>
import axios from "axios";

export default {
  async beforeMount() {
    try {
      const response = await axios.get(`http://localhost:4000/`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style></style>
