<template>
  <MainMenuButton name="Start" @game-on="gameOn()" />
  
</template>

<script>
import useGlobal from '../../store/globals'
export default {
  methods: {
    gameOn() {
      useGlobal().gameOn.value = true
    },
  },
};
</script>

<style>
</style>