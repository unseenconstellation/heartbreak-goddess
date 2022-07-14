<template>
  <button @click="loadEmit">Load Game</button>
</template>

<script>
export default {
  methods:{
    loadEmit(){
      this.$emit("load-chars")
    }
  }

}
</script>

<style>

</style>