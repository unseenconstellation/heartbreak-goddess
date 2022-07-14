<template>
  <div id="card-border">
    <CreateTitle />
    <div id="player-card">
      <div id="left-column">
        <MainInfo @changeName="changeName" :name="name" />
        <CharBackground />
        <Aura :auras= "auras"/>
        <OtherDep :depAttrs="dependentAttrs" :exp="exp" :money="money" />
        <EthSelector/>
      </div>
      <div id="second-left">

      </div>
      <div id="mid-column">
        <MyDep :metric = "metric" :depAttrs="dependentAttrs" />
        <PointsRemaining :pointsLeft="pointsLeft" />
        <button @click="submitChar">Submit</button>
      </div>
      <MyInd
        @decrement="decrement"
        @increment="increment"
        :pointsLeft="pointsLeft"
        :myAttrs="myAttrs"
      />
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
import EthSelector from './MainInfo/EthSelector.vue';
import { v4 as uuidv4 } from 'uuid';
import {characters} from '../../store/Characters'
import {aura} from '../../store/Aura'

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
    
  },
  props:["metric"],
  data() {
    return {
      completed: false,
      character: {},
      id: uuidv4(),
      name: "",
      auras: aura.map(aura =>{
        return{
          name: aura.name,
          value: aura.value,
          id: aura.id
        }
      }) ,
      myAttrs: attrs.map((attr) => {
        return {
          name: attr.name,
          value: attr.value,
          id: attr.id,
        };
      }),
      pointsLeft: 60000,
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
          metricUnit: attr.metricUnit

        };
      }),
      exp: 0,
      money: 0,
      image: "https://i.ibb.co/6WBBP3F/a1.png"
    };
  },
  methods: {
    submitChar() {
      console.log(this.metric, "fuck")
      if (this.name.length > 0) { 
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
          lust:0,
          sanity: submDeAtt.find(attr => attr.name === "Sanity").value
        };
      this.$emit("completed", this.character)
      }
      characters.push(this.character)
      console.log(this.character)
      // localStorage.setItem("Character",this.character)
    },
    changeName(e) {
      this.name = e;
      console.log("This name is ", this.name);
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
  },
};
</script>

<style>
input {
  background-color: rgba(255, 255, 255, 0.226);
  color: white;
}
#card-border {
  height: 100%;
}
#left-column {
  align-self: flex-start;
}
#player-card {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-top: white 2px double;
  border-bottom: white 2px double;
  background-color: rgba(255, 0, 255, 0.13);
  margin-top: 5px;
  flex-wrap: wrap;
  padding-top: 5px;
}
#mid-column {
  align-self: flex-start;
  max-width: 100%;
}
</style>