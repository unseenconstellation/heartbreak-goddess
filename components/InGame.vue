<template>
  <div id="in-game-menu">
    <div id="higher-in-game">
        <br/>
        <BattleMap v-if="currentlyBattle" :character="character" />
        <button @click="toBattle">Battle Map</button>
      
    </div>
    <div id="lower-in-game">
      this is where the description of various things will go.
    </div>
  </div>
</template>

<script>
import { characters } from "../store/Characters";
import { adjust } from "../store/Adjust";
import BattleMap from "./Maps/BattleMap.vue";
export default {
  props: ["character"],
  data() {
    return {
      currentlyBattle: this.character.inBattle,
    };
  },
  components: { BattleMap },

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
  width: 100%;
  flex-wrap: wrap;
  border-top: 2px white solid;
  height: 80%;
}
#lower-in-game {
  border: magenta solid 2px;
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