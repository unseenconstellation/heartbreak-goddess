<template>
  <div id="metric-option">
    <h4>Toggle Metric Units</h4>
    <br/>
    <h4 id="metric-button" @click="changeMetric">Set to {{ !metric }}</h4>
    <br/>
    <h4>Currently Metric: {{ metric }}</h4>
  </div>
</template>

<script>
import useGlobal from "../../store/globals";
export default {
  data() {
    const {metric} = useGlobal()
    return {
      metric
    };
  },

  methods: {
    changeMetric(e) {
      this.metric = !this.metric
      localStorage.setItem("metric", this.metric)
    },
  },
};
</script>

<style scoped>
#metric-button{
  color: gold;
  cursor: pointer;
}
#metric-option {
  display: flex;
  justify-content: space-around;
  align-items: space-around;
  width: 100%;
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
</style>