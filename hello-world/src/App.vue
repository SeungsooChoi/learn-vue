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
  <todo-header @call="call" :count="state.count"></todo-header>
</template>

<script>
import { reactive, computed } from "vue";
import TodoHeader from "./components/TodoHeader.vue";
export default {
  components: { TodoHeader },
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

    const call = (text) => {
      alert(text);
    };

    return {
      state,
      add,
      changeFlag,
      call,
    };
  },
};
</script>

<style></style>
