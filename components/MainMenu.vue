<template>
  <div id="main-menu">

    <MainMenuTitle v-if="!loadSelect && !options" />
    <img v-if="!gameOn && !loadSelect" id="title-image" src="https://tb.sb-cd.com/t/8940826/8/9/w:800/t9-enh/widowmaker-headscissor-goddess.jpg" alt="headscissor">
    <LoadGame @back-menu="backMenu"  @load-chars="loadChars" v-if="yourChar.length>0&&hasChar && !loadSelect && !options"/>
    <button id="no-saves" v-else-if="!loadSelect && !options && yourChar.length === 0">Load Game</button>
    <CharacterSelect @char-delete ="charDelete" @back-menu="backMenu"  v-if="hasChar && loadSelect && !options" :yourChar = "yourChar"/>
    <MainMenuOptions v-if="!loadSelect && !options"/>
    <Options  v-if="!loadSelect" @option-select= "optionSelect" />
  </div>
</template>

<script>
import useGlobal from '../store/globals'
import InGame from './InGame.vue';
import CharacterSelect from './MainMenu/CharacterSelect.vue';
import LoadGame from './MainMenu/LoadGame.vue'
import Options from './Options/Options.vue';

export default {
  setup(){
    const{options, loadSelect, gameOn} = useGlobal()
    return{
      gameOn, loadSelect,options
    }
  },
  components: { InGame, LoadGame, CharacterSelect, Options },
  props:["hasChar", "yourChar",],
  methods: {
    fuck(){
      this.$emit("fuck")
    },
    charDelete(e){
      this.$emit("char-delete", e)
  
    },
    // gameOn() {
    //   this.$emit("game-on");
    //   console.log("success")
    // },
    loadChars(){
      this.loadSelect=true
      console.log(this.loadSelect)
    },
    optionSelect(){
      this.options = !this.options
      console.log("OPTIONS")
    },
    backMenu(){
      this.loadSelect=false
      this.$emit("back-menu")
    }
  },
};
</script>

<style >
#title-image{
  align-self: center;
  max-width: 400px;
  border: double rgb(255, 170, 251) 4px;
  margin-bottom: 40px;
}
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