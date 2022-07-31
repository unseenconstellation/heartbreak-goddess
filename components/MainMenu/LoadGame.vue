<template>
  <button @click="gameOn">Load Game</button>
</template>

<script>
import useGlobal from '../../store/globals'
export default {
  data(){
    const {loadSelect} = useGlobal()
    return {loadSelect}
  },
  methods:{
    gameOn(){
      this.loadSelect = true
    }
  }

}
</script>

<style>

</style>