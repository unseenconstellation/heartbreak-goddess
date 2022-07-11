<template>
  <div id="my-background">
    <h4 >Choose Your Character's Background</h4>
    <div>
      
      <select>
         <option v-for="background in myBackgrounds" :key="background.id" name="background" id="background" value="">{{background.name}}</option>

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

  }
};
</script>

<style scoped>
#my-background{
  border: 2px white double;
  margin-top: 4px;
}
</style>