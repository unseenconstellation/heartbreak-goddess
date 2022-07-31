<template>
  <div id="in-game-menu">
    <div id="higher-in-game">
      
        <CharacterUI :you = "character"/>
        <div>
{{character}}
          </div>
      
    </div>
    <div id="lower-in-game">
      this is where the description of various things will go.
    </div>
  </div>
</template>

<script>
import { adjust } from "../store/Adjust";
import BattleMap from "./Maps/BattleMap.vue";
import CharacterUI from './InGame/CharacterUI.vue';
import useGlobal from '../store/globals'
export default {
  data() {
    const {character} = useGlobal()
    return {
      currentlyBattle: character.inBattle,
      character
    };
  },
  components: { BattleMap, CharacterUI },
  methods: {
    find() {
      adjust(this.character.id);
    },
    toBattle() {
      if (!this.currentlyBattle) {
        console.log(this.currentlyBattle);
        this.currentlyBattle = true;
        this.$emit("in-battle", true);
      } else {
        console.log(this.currentlyBattle);
        this.currentlyBattle = false;
        this.$emit("in-battle", false);
      }
    },
  },
};
</script>

<style>
#in-game-menu {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
}
#higher-in-game {

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  flex-wrap: wrap;
  border-top: 2px white solid;
  height: 50%;
}
#lower-in-game {
  width: 100%;
}
#action-screen {
  border: 3px white solid;
  width: 100%px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
</style>