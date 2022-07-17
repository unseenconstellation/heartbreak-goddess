<template>
  <div id="card-border">
    <div class="title-back">
      <button @click="backFromNewGame">←Back</button>
      
      <CreateTitle />
    </div>
    <div id="player-card">
      <div id="left-column">
        <MainInfo @changeName="changeName" :name="name" />
        <CharBackground />
        <Aura :auras="auras" />
        <OtherDep :depAttrs="dependentAttrs" :exp="exp" :money="money" />
        <EthSelector :image = "image" @new-look="newLook" />
        <ImageUpload @upload-image ="uploadImage"/>
        
      </div>
      <div id="second-left"></div>
      <div id="mid-column">
      <MyInd
        @decrement="decrement"
        @increment="increment"
        :pointsLeft="pointsLeft"
        :myAttrs="myAttrs"
      />
        </div>
      <div id="right-column">
        <MyDep :metric="metric" :depAttrs="dependentAttrs" />
        <PointsRemaining :pointsLeft="pointsLeft" />
        <button id="submit-character" @click="submitChar">Submit</button>
        <div v-if="warning" class="warning">You need to input a name and utlize all the points
          you have remaining.

      </div>
      </div>
    </div>
  </div>
</template>

<script>
import CreateTitle from "./CreateTitle.vue";
import MainInfo from "./MainInfo.vue";
import MyDep from "./MyDep.vue";
import MyInd from "./MyInd.vue";
import PointsRemaining from "./PointsRemaining.vue";
import { attrs, depAttrs } from "../../store/Attr";
import CharBackground from "./MainInfo/CharBackground.vue";
import Aura from "./MainInfo/Aura.vue";
import OtherDep from "./MainInfo/OtherDep.vue";
import EthSelector from "./MainInfo/EthSelector.vue";
import { v4 as uuidv4 } from "uuid";
import { characters } from "../../store/Characters";
import { aura } from "../../store/Aura";
import { attack, attacks } from "../../store/Attacks";
import ImageUpload from './ImageUpload.vue';

export default {
  components: {
    MainInfo,
    CreateTitle,
    MyInd,
    MyDep,
    PointsRemaining,
    CharBackground,
    Aura,
    OtherDep,
    EthSelector,
    ImageUpload,
  },
  props: ["metric"],
  data() {
    return {
      completed: false,
      character: {},
      id: uuidv4(),
      name: "",
      warning: false,
      auras: aura.map((aura) => {
        return {
          name: aura.name,
          value: aura.value,
          id: aura.id,
        };
      }),
      myAttrs: attrs.map((attr) => {
        return {
          name: attr.name,
          value: attr.value,
          id: attr.id,
        };
      }),
      pointsLeft: 10,
      dependentAttrs: depAttrs.map((attr) => {
        return {
          name: attr.name,
          value: attr.value,
          unit: attr?.unit,
          id: attr.id,
          reliance: [...attr.reliance],
          depend: attr.depend,
          leftCard: attr.leftCard,
          metricValue: attr.metricValue,
          metricUnit: attr.metricUnit,
        };
      }),
      attacks: attacks,
      exp: 0,
      money: 0,
      image: "https://i.ibb.co/6WBBP3F/a1.png",
    };
  },
  methods: {
    submitChar() {
      if (this.name.length > 0 && !this.pointsLeft) {
        this.warning = false
        let submInAtt = this.myAttrs.map((attr) => {
          return {
            name: attr.name,
            value: attr.value,
            id: attr.id,
          };
        });
        let submDeAtt = this.dependentAttrs.map((attr) => {
          return {
            name: attr.name,
            value: attr.value,
            unit: attr?.unit,
            id: attr.id,
            reliance: [...attr.reliance],
            depend: attr.depend,
            leftCard: attr.leftCard,
          };
        });
        this.character = {
          id: this.id,
          name: this.name,
          exp: this.exp,
          money: this.money,
          attributes: submInAtt,
          depAttributes: submDeAtt,
          auras: this.auras,
          image: this.image,
          lust: 0,
          sanity: submDeAtt.find((attr) => attr.name === "Sanity").value,
          gender: "Female",
          victims: [],
          charactersMet: [],
          inBattle: false,
          skills: [
            ...this.attacks.filter(
              (attack) => attack.weapon === "Melee" || attack.weapon === "Spell"
            ),
          ],
        };
        this.$emit("completed", this.character);
      characters.push(this.character);
      console.log(this.character);
      let yourChars = JSON.parse(localStorage.getItem("your-chars"));
      yourChars.push(this.character);
      let charsString = JSON.stringify(yourChars);
      localStorage.setItem("your-chars", charsString);
      }else{
        this.warning = true
      }
    },
    changeName(e) {
      this.name = e;
      console.log("This name is ", this.name);
    },
    uploadImage(e){
      this.image = e
    },
    increment(id) {
      console.log(this.myAttrs);
      let selected = this.myAttrs.find((attr) => attr.id === id);
      this.pointsLeft--;
      this.dependentAttrs.forEach((attr) => {
        if (attr.reliance.includes(selected.name)) {
          if (attr.reliance.length > 1) {
            let orderedArray = [];
            let properties = this.myAttrs.filter((myAttr) => {
              return attr.reliance.includes(myAttr.name);
            });
            let indexedProperties = properties.map((proAttr) => {
              let index = attr.reliance.indexOf(proAttr.name);
              return { ...proAttr, index };
            });
            console.log(indexedProperties);
            console.log(this.myAttrs);
            let count = 0;
            while (orderedArray.length !== attr.reliance.length) {
              orderedArray.push(
                indexedProperties.find((attr) => {
                  return attr.index === count;
                })
              );
              count++;
            }
            attr.depend(orderedArray);
          } else {
            attr.depend(selected.value);
          }
        }
      });
    },
    decrement(id) {
      let selected = this.myAttrs.find((attr) => attr.id === id);
      this.pointsLeft++;
      this.dependentAttrs.forEach((attr) => {
        if (attr.reliance.includes(selected.name)) {
          if (attr.reliance.length > 1) {
            let orderedArray = [];
            let properties = this.myAttrs.filter((myAttr) => {
              return attr.reliance.includes(myAttr.name);
            });
            let indexedProperties = properties.map((proAttr) => {
              let index = attr.reliance.indexOf(proAttr.name);
              return { ...proAttr, index };
            });
            console.log(indexedProperties);
            console.log(this.myAttrs);
            let count = 0;
            while (orderedArray.length !== attr.reliance.length) {
              orderedArray.push(
                indexedProperties.find((attr) => {
                  return attr.index === count;
                })
              );
              count++;
            }
            console.log(orderedArray[0].value);
            attr.depend(orderedArray);
          } else {
            attr.depend(selected.value);
          }
        }
      });
    },
    newLook(e) {
      this.image = e;
    },
    backFromNewGame(){
      this.$emit("back-menu")

    },
  },
};
</script>

<style>
.title-back{

}
input {
  background-color: rgba(255, 255, 255, 0.226);
  color: white;
}
#card-border {
  height: 100%;
}
#left-column {
  align-self: flex-start;
  max-width: 361.89px;
  
}

#player-card {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-top: white 2px double;
  border-bottom: white 2px double;
  background-color: rgba(71, 1, 71, 0.493);
  margin-top: 5px;
  flex-wrap: wrap;
  padding-top: 5px;
}
#mid-column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  max-width: 100%;
}
#submit-character{
  
}
</style>