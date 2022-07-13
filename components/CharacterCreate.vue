<template>
  <div id="character-create">
    <PlayerCard @completed = "completed"/>
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
  }

}
</script>

<style>
#character-create{
    width: 100%;
    height: 100%;

}
</style>