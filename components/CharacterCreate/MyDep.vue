<template>
  <div  id="dep-attr">
    <div  v-for="attr in attrs" :key="attr.id">

        <div class="attribute" @click="check" v-if="!attr.leftCard && !metric">
            <div>{{attr.name}}</div>
            <h3>{{attr.value}} {{attr.unit}}</h3>
        </div>
        <div class="attribute" @click="check" v-else-if="!attr.leftCard && metric">
          <div>{{attr.name}}</div>

            <h3 v-if="attr.metricValue">{{attr.metricValue}} {{attr.metricUnit}}</h3>
            <h3 v-else>{{attr.value}} {{attr.unit}}</h3>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        attrs: this.depAttrs,

    };
  },
  props: ["depAttrs", "metric"],
  methods: {
    check(){
      console.log(this.metric)
    }
  }
};
</script>

<style scoped>
.attribute{
    border-bottom: 2px white solid;
}
#dep-attr {

    border: 2px white solid;
    margin-bottom: 10px;
}
</style>