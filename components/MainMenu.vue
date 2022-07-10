<template>
  <div id="main-menu">
    <MainMenuTitle />
    <MainMenuOptions @game-on="gameOn()"/>
  </div>
</template>

<script>
export default {
  methods: {
    gameOn() {
      this.$emit("game-on");
      console.log("success")
    },
  },
};
</script>

<style>
#main-menu{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
</style>