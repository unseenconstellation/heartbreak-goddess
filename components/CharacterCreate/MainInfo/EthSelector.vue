<template>
  <div id="ethnicities">
    <h4>Pick Your Ethnicity</h4>
    {{ ethnicities[ethIndex].name }}
    <select @change="changeEth" name="ethnicity" id="ethnicity">
      <option
        v-for="ethnicity in ethnicities"
        :value="ethnicity.id - 1"
        :key="ethnicity.id"
      >
        {{ ethnicity.name }}
      </option>
    </select>
    <div id="image">
    <button @click="imgBack">Backward</button>
    <img
      id="your-picture"
      :src="ethnicities[ethIndex].choices[imgIndex]"
      alt=""
    />
    <button @click="imgFor">Forward</button>

    </div>
  </div>
</template>

<script>
import { ethnicities } from "../../../store/Ethnicities";
export default {
  data() {
    return {
      ethIndex: 0,
      ethnicities: ethnicities,
      imgIndex: 0,
    };
  },
  methods: {
    changeEth(e) {
      console.log(e.target.value);
      this.ethIndex = e.target.value;
      this.$emit("new-look", ethnicities[ethIndex].choices[imgIndex])
    },
    ethFor() {
      if (this.ethIndex < this.ethnicities.length - 1) {
        this.ethIndex++;
        this.imgIndex = 0;
      }
    },
    ethBack() {
      if (this.ethIndex > 0) {
        this.ethIndex--;
        this.imgIndex = 0;
      }
    },
    imgFor() {
      if (this.imgIndex < this.ethnicities[this.ethIndex].choices.length - 1) {
        this.imgIndex++;
        console.log(
          this.imgIndex < this.ethnicities[this.ethIndex].choices.length - 1
        );
      }
    },
    imgBack() {
      if (this.imgIndex > 0) {
        this.imgIndex--;
      }
    },
  },
};
</script>

<style scoped>
#ethnicities {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#image {
  display: flex;
  flex-direction: row;
}
#your-picture {
  max-width: 150px;
}
</style>