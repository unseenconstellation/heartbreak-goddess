<template>
  <div id="whole-game">
    <div id="interface">
      <MainMenu
        @option-change="optionChange"
        v-if="!gameOn"
        :yourChar="yourChar"
        :hasChar="hasChar"
      />
      <CharacterCreate
        @back-menu="backMenu"
        v-if="gameOn && !readyForPlay"
      />
      <InGame
        @in-battle="toBattle"
        :character="character"
        v-if="gameOn && readyForPlay"
      />
    </div>
  </div>
</template>

<script>
import useGlobal from "../store/globals";
import LoadGame from "../components/MainMenu/LoadGame.vue";
import { depAttrs } from "../store/Attr";
export default {
  components: { LoadGame },
  name: "IndexPage",
  mounted() {
    let localCharacters = localStorage.getItem("your-chars");
    if (!localCharacters) {
      console.log("making new list");
      localStorage.setItem("your-chars", JSON.stringify([]));
      this.yourChar = JSON.parse(localStorage.getItem("your-chars"));
    } else {
      this.yourChar = JSON.parse(localStorage.getItem("your-chars"));
    }
    if (JSON.parse(localStorage.getItem("your-chars")).length > 0) {
      this.hasChar = true;
      console.log("You have characters");
    }
    let metric = JSON.parse(localStorage.getItem("metric"));
    console.log(metric);
    if (metric === null) {
      localStorage.setItem("metric", false);
    } else {
      this.metric = metric;
    }
  },
  setup() {
    const { gameOn, number, readyForPlay, character, yourChar } = useGlobal();
    return {
      gameOn,
      number,
      readyForPlay,
      character,
      yourChar,
    };
  },
  data() {
    return {
      test: depAttrs,
      metric: null,
      hasChar: false,
    };
  },
  methods: {
    fuckYou() {
      useGlobal().gameOn.value = !useGlobal().gameOn.value;
    },

    backMenu() {
      this.gameOn = false;
    },
    toBattle(e) {
      this.character.inBattle = e;
      console.log("CHARLIE MURPHY");
    },
    changeMetric() {
      this.metric = !this.metric;
      console.log(this.metric);
      this.testLocal();
    },
    testLocal() {
      let test = localStorage.getItem("You");
      console.log(test);
    },
    optionChange(e) {
      console.log(e, "you made it");
      if (e === "metric") {
        if (this.metric !== false) {
          console.log("setting to false");
          localStorage.setItem("metric", false);
          this.metric = false;
        } else {
          console.log("setting to true");
          localStorage.setItem("metric", true);
          this.metric = true;
        }
      }
    },
    fuck() {
      console.log(this.who);
    },
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
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
body {
  font-family: "Rajdhani", "Franklin Gothic Medium", "Arial Narrow", Arial,
    sans-serif;
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
#metric {
  text-align: center;
}
#whole-game {
  height: 100%;
}
</style>