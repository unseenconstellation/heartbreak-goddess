<template>
  <div id="my-background">
    <h4 >Choose Your Character's Background</h4>
    <div>
      <select @change="myBackgroundChange">
         <option v-for="background in myBackgrounds" :key="background.id" name="background" id="background" :value="background.id">{{background.name}}</option>
      </select>
    </div>
  </div>
</template>

<script>
import {backgrounds} from "../../../store/CharBackground";
export default {
  data() {
    return {
      myBackgrounds: backgrounds,
    };
  },
  methods:{
    myBackgroundChange(e){
      console.log(e.target.value)
      this.$emit("change-background",e.target.value)
    }

  }
};
</script>

<style scoped>
#my-background{
  border: 2px white double;
  margin-top: 4px;
}
</style>