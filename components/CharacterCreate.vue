<template>
  <div id="character-create">
    <PlayerCard :metric="metric" @completed = "completed"/>
  </div>
</template>

<script>
import PlayerCard from './CharacterCreate/PlayerCard.vue'

export default {
  components: { PlayerCard },
  methods:{
    completed(e){
      this.$emit("completed",e)
    }
  },
  props:["metric"]

}
</script>

<style>
#character-create{
    width: 100%;
    height: 100%;

}
</style>