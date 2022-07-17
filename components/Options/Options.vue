<template>
<div id="whole-options">
    <button class="option-button" v-if="!optionsHere "  @click= "optionSelect">Options</button>
    <button class="back-button" @click="unOption" v-if="optionsHere">
        ←Back
    </button>
  <div v-if="optionsHere"  id="options">
    <h3>Options</h3>
    <Metric class="option" @option-change = "optionChange" :metric = "metric" v-if="optionsHere " />
  </div>

</div>
</template>

<script>

import Metric from './Metric.vue'
export default {
  components: { Metric },
  data(){
    return{
        optionsHere: this.options
    }
  },
    props:["options" , "metric"],
    methods:{
        optionSelect(){
            this.$emit("option-select")
            this.optionsHere = true
        },
        unOption(){
            this.$emit("option-select")
            this.optionsHere = false
        },
        optionChange(e){
            this.$emit("option-change", e)
        }
    }
}

</script>

<style scoped>
#options{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(71, 1, 71, 0.493);;
    border-top: white 2px double;
  border-bottom: white 2px double;

    
}
.option-button{
    width: 100%;
}

#whole-options{
    width: 100%;
}

</style>