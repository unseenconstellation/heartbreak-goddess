<template>
  <Button @click="gameOn">{{name}}</Button>
</template>

<script>
export default {
  props:["name"],
  methods:{
    gameOn(){
      this.$emit("game-on")
    }
  }

}
</script>
