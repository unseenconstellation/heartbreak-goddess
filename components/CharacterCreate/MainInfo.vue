<template>
  <div id="player-main">
    <Name @changeName = "changeName" :name="name"/>
  </div>
</template>

<script>

import Name from './MainInfo/Name.vue'
export default {
  components: { Name,},
  props:["name"],
  methods:{
    changeName(e){
      this.$emit("changeName",e)
    }
  }

}
</script>


<style>
#player-main{
  align-self: flex-start;
  border: 3px white double;
}
</style>