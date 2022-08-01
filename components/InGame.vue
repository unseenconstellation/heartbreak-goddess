<template>
  <div id="in-game-menu">
    <div id="column-screen">
      <MainScreen />
      <div>Messages are found here</div>
    </div>
      <CharacterUI :you="character" />
  </div>
</template>

<script>
import { adjust } from "../store/Adjust";
import BattleMap from "./Maps/BattleMap.vue";
import CharacterUI from "./InGame/CharacterUI.vue";
import useGlobal from "../store/globals";
import MainScreen from "./InGame/MainScreen.vue";
export default {
  data() {
    const { character } = useGlobal();
    return {
      currentlyBattle: character.inBattle,
      character,
    };
  },
  components: { BattleMap, CharacterUI, MainScreen },
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
#column-screen {
  height: 100%;
  width: 58%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  margin: 0 auto;
}
#in-game-menu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: space-around;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
}
#character-ui{
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
}
</style>