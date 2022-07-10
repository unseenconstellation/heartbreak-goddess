<template>
  <MainMenuButton name="Start" @game-on="gameOn()" />
</template>

<script>
export default {
  methods: {
    gameOn() {
      this.$emit("game-on");
      console.log("yes")
    },
  },
};
</script>

<style>
</style>