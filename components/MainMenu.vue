<template>
  <div id="main-menu">
    <MainMenuTitle />
    <LoadGame @load-chars="loadChars" v-if="hasChar && !loadSelect"/>
    <button id="no-saves" v-else>Load Game</button>
    <CharacterSelect v-if="hasChar && loadSelect"/>
    <MainMenuOptions @game-on="gameOn()"/>
  </div>
</template>

<script>
import InGame from './InGame.vue';
import CharacterSelect from './MainMenu/CharacterSelect.vue';
import LoadGame from './MainMenu/LoadGame.vue'

export default {
  components: { InGame, LoadGame, CharacterSelect },
  data(){
    return{
      loadSelect: false
    }
  },
  props:["hasChar"],
  methods: {
    gameOn() {
      this.$emit("game-on");
      console.log("success")
    },
    loadChars(){
      this.loadSelect=true
      console.log(this.loadSelect)
    }
  },
};
</script>

<style >
#main-menu{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
#no-saves{
  border-color: grey;
  color: white;
  animation: none;
}
#no-saves:hover{
  cursor: default;
  border-color: grey;
}
</style>