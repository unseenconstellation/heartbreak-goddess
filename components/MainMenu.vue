<template>
  <div id="main-menu">

    <MainMenuTitle v-if="!loadSelect && !options" />
    <LoadGame @back-menu="backMenu" @game-on="gameOn" @load-chars="loadChars" v-if="hasChar && !loadSelect && !options"/>
    <button id="no-saves" v-else-if="!loadSelect && !options">Load Game</button>
    <CharacterSelect @back-menu="backMenu" @char-chosen = "characterChosen" @game-on="gameOn" v-if="hasChar && loadSelect && !options" :yourChar = "yourChar"/>
    <MainMenuOptions v-if="!loadSelect && !options" @game-on="gameOn()"/>
    <Options @option-change = "optionChange" :metric = "metric" v-if="!loadSelect" @option-select= "optionSelect" />
    
  </div>
</template>

<script>
import InGame from './InGame.vue';
import CharacterSelect from './MainMenu/CharacterSelect.vue';
import LoadGame from './MainMenu/LoadGame.vue'
import Options from './Options/Options.vue';

export default {
  components: { InGame, LoadGame, CharacterSelect, Options },
  data(){
    return{
      loadSelect: false,
      options: false
    }
  },
  props:["hasChar", "yourChar","metric" ],
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

    },
    optionSelect(){
      this.options = !this.options
      console.log("OPTIONS")
    },
    optionChange(e){
      this.$emit("option-change", e)
    },
    backMenu(){
      this.loadSelect=false
      this.$emit("back-menu")
    }
  },
};
</script>

<style >
#main-menu{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: space-around;
    
    
    
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