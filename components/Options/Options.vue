<template>
  <div id="whole-options">
    <button class="option-button" v-if="!options" @click="optionSelect">
      Options
    </button>
    <button class="back-button" @click="unOption" v-if="options">←Back</button>
    <div v-if="options" id="options">
      <h3>Options</h3>
      <Metric class="option" v-if="options" />
    </div>
  </div>
</template>

<script>
import useGlobal from "../../store/globals";
import Metric from "./Metric.vue";
export default {
  components: { Metric },
  data() {
    const { options } = useGlobal();
    return {
      options,
      whom: useGlobal().number,
    };
  },
  methods: {
    optionSelect() {
      this.options = true;
    },
    unOption() {
      this.options = false;
    },
  },
};
</script>

<style scoped>
#options {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(71, 1, 71, 0.493);
  border-top: white 2px double;
  border-bottom: white 2px double;
}
.option-button {
  width: 100%;
}

#whole-options {
  width: 100%;
}
</style>