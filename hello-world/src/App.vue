<template>
  <h1>hello world</h1>
  count + 2 : {{ state.plusCount }}
  <div>
    {{ state.count }}
    <button @click="add">add</button>
  </div>
  <div>
    {{ state.flagToString }}
    <span v-show="state.flag">true일때 보임</span>
    <button @click="changeFlag">Change</button>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
export default {
  setup() {
    const state = reactive({
      count: 0,
      flag: false,
      plusCount: computed(() => state.count + 2),
      flagToString: computed(() => String(state.flag)),
    });

    const add = () => {
      state.count++;
    };
    const changeFlag = () => {
      state.flag = !state.flag;
    };
    return {
      state,
      add,
      changeFlag,
    };
  },
};
</script>

<style></style>
