<template>
  Header를 통한 이벤트 , emit 테스트
  <button @click="handleClick">CALL</button>
</template>

<script>
export default {
  props: {
    count: Number,
  },
  emits: ["call"],
  setup(props, { emit }) {
    const handleClick = () => {
      emit("call", "todoHeader");
    };

    console.log("count: " + props.count);

    return {
      handleClick,
    };
  },
};
</script>

<style></style>
