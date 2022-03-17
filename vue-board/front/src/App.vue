<template>
  <board-header> </board-header>
  <router-view />
  <footer>
    <p>2022 &copy; Seungsoo Choi. All right reserved.</p>
  </footer>
</template>

<script>
import BoardHeader from "./components/BoardHeader.vue";

export default {
  components: {
    BoardHeader,
  },
};
</script>

<style></style>
