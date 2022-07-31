<template>
  <div id="char-select">
    <button @click="gameOff">←Back</button>
    Select Your Character
    <div id="character-list">
      <div v-for="character in yourChar" :key="character.id">
        <div class="character-card">
          <div v-if="deleteChoice === character.id">
            <span>Are you sure you want to delete?</span>
            <div>
              <button @click="initDelete(character.id)">Yes</button>
              <button
                @click="
                  () => {
                    deleteChoice = null;
                  }
                "
              >
                No
              </button>
            </div>
          </div>
          <div class="character-name">{{ character.name }}</div>
          <img class="character-image" :src="character.image" alt="" />
          <div>
            <button @click="choseGame(character)">Select</button>
            <button @click="setDelete(character.id)">Delete</button>
          </div>
          <div>
            {{ character.id }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useGlobal from "../../store/globals";
export default {
  data() {
    const { yourChar } = useGlobal();
    return {
      deleteChoice: null,
      yourChar,
    };
  },
  methods: {
    initDelete(e) {
      console.log(e);
      this.yourChar = this.yourChar.filter((character) => character.id !== e);
      localStorage.setItem("your-chars", JSON.stringify(this.yourChar));
      if (this.yourChar.length === 0) {
        console.log("it's here");
      }
    },
    setDelete(e) {
      this.deleteChoice = e;
    },
    choseGame(e) {
      useGlobal().readyForPlay.value = true;
      useGlobal().gameOn.value = true;
      useGlobal().character.value = e;
    },
    gameOff() {
      useGlobal().loadSelect.value = false;
    },
  },
};
</script>

<style >
#char-select {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: rgba(71, 1, 71, 0.493);
  border-top: 2px white solid;
  border-bottom: 2px white solid;
}
#character-list {
  display: flex;
  flex-wrap: wrap;
}
.character-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  height: 400px;
  border: 3px solid white;
  background-color: rgb(90, 0, 56);
  background-image: linear-gradient(
    to bottom right,
    rgb(129, 89, 114),
    rgb(90, 0, 56)
  );
}
.character-card:hover {
  border-color: goldenrod;
}
.character-image {
  max-width: 200px;
  max-height: 200px;
  border: 3px solid rgb(0, 0, 0);
}
.character-name {
  font-size: 40px;
  color: rgb(255, 255, 255);
}
</style>