<template>
  <div id="main-menu">
    <MainMenuTitle v-if="!loadSelect" />
    <LoadGame @game-on="gameOn" @load-chars="loadChars" v-if="hasChar && !loadSelect"/>
    <button id="no-saves" v-else-if="!loadSelect">Load Game</button>
    <CharacterSelect @char-chosen = "characterChosen" @game-on="gameOn" v-if="hasChar && loadSelect" :yourChar = "yourChar"/>
    <MainMenuOptions v-if="!loadSelect" @game-on="gameOn()"/>
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
  props:["hasChar", "yourChar", ],
  methods: {
    gameOn() {
      this.$emit("game-on");
      console.log("success")
    },
    loadChars(){
      this.loadSelect=true
      console.log(this.loadSelect)
    },
    characterChosen(e){
      this.$emit("char-chosen",e)

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