<template>
<div>

  <div id="interface">
    <MainMenu @game-on="startGame" v-if="!gameOn" />
    <CharacterCreate
      @completed="characterMade" :metric = "metric"
      v-if="gameOn && !readyForPlay"
    />
    <InGame :character="character" :metric = "metric" v-if="gameOn && readyForPlay" />

  </div>
  <div id="metric">
      <input id="metric" @change="changeMetric" type="checkbox"  />
    <label > Metric System</label><br />
      </div>
</div>
</template>

<script>

import { depAttrs } from "../store/Attr";
export default {
  name: "IndexPage",
  data() {
    return {
      gameOn: false,
      test: depAttrs,
      readyForPlay: false,
      character: {},
      metric: false
    };
  },
  methods: {
    startGame() {
      this.gameOn = true;
    },
    characterMade(e) {
      console.log("let the games begin");
      this.character = e;
      this.readyForPlay = true;
    },
    changeMetric(){
      this.metric = !this.metric
      console.log(this.metric)
    }

  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Rajdhani:wght@500&family=Roboto&display=swap");
#__nuxt {
  height: 100%;
}
#__layout {
  height: 100%;
}
#interface {
  text-align: center;
  height: 100%;
  display: flex;
  justify-content: center;
}
body {
  font-family: "Roboto", "Rajdhani", "Franklin Gothic Medium", "Arial Narrow",
    Arial, sans-serif;
  height: 100vh;
  background-color: rgb(56, 56, 56);
  color: white;
}
button {
  border-radius: 5%;
  border: rgb(255, 170, 251) 4px double;
  color: rgb(255, 170, 251);
  background-color: rgba(3, 3, 3, 0.253);
}
button:hover {
  border: white 4px double;
  color: white;
  animation-name: button-hover;
  animation-duration: 0.4s;
}
@keyframes button-hover {
  0% {
    border: rgb(255, 170, 251) 4px double;
    color: rgb(255, 170, 251);
  }
  100% {
    border: white 4px double;
    color: white;
  }
}
#metric{
  text-align: center;
}
</style>