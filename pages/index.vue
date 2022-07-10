<template>
  <div id="interface">
    <MainMenu @game-on="startGame" v-if="!gameOn"/>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data(){
    return{
    gameOn: false
    }
  },
  methods:{
    startGame(){
      this.gameOn = true
    }
  }
};
</script>
<style>
#__nuxt{
  height: 100%;
}
#__layout{
  height: 100%;
}
#interface{
  text-align: center;
  height: 100%;
  display: flex;
  justify-content: center;
}
body {
  height: 100vh;
  background-color: rgb(56, 56, 56);
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
  0%{
    border: rgb(255, 170, 251) 4px double;
    color: rgb(255, 170, 251);
  }
  100% {
    border: white 4px double;
    color: white;
  }
}
</style>