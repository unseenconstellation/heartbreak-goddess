<template>
  <div id="overall-attributes">
    <div class="att-cate">
      <div id="my-ind" v-for="attr in myAttrs" :key="attr.id">
        <div>
          <div class="ind-attr">
            <label :for="attr.name">{{ attr.name }}:</label>
            <h3 class="value">{{ attr.value }} {{ attr?.unit }}</h3>

            <div class="change">
              <h3 @click="inc(attr.id)" class="button-g button">+</h3>
              <h3 @click="dec(attr.id)" class="button-r button">-</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myAttrs: this.myAttrs,
    };
  },
  props: ["pointsLeft", "myAttrs"],
  methods: {
    inc(id) {
      if (this.pointsLeft > 0) {
        let targetAtt = this.myAttrs.find((attr) => {
          return attr.id === id;
        });
        targetAtt.value =Math.round((targetAtt.value+ 0.1)*10)/10;
        this.$emit("increment", id);
      }
    },
    dec(id) {
      let targetAtt = this.myAttrs.find((attr) => {
        return attr.id === id;
      });
      if (targetAtt.value > 1) {
        targetAtt.value =Math.round((targetAtt.value- 0.1)*10)/10;
        this.$emit("decrement", id);
      }
    },
  },
};
</script>

<style>
.att-cate {
  width: 89%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
#overall-attributes {
  width: 300px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
input[type="number"]::-webkit-inner-spin-button {
  opacity: 1;
}

.ind-attr {
  width: 120px;
  height: 120px;
  border: 2px white solid;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 5px;
}
.change {
  display: flex;
  justify-content: space-between;
  height: 30%;
}
.button-g {
  width: 50%;
  height: 100%;
  border: 2px solid green;
  color: green;
  display: flex;
  justify-content: center;
  align-items: center;
}
.button-r {
  width: 50%;
  height: 100%;
  border: 2px solid red;
  color: red;
}
.button:hover {
  color: white;
  border-color: white;
  cursor: pointer;
}
</style>