<template>
  <div id="character-create">
    <PlayerCard/>
  </div>
</template>

<script>
import PlayerCard from './CharacterCreate/PlayerCard.vue'

export default {
  components: { PlayerCard },


}
</script>

<style>
#character-create{
    width: 100%;
    height: 100%;

}
</style>