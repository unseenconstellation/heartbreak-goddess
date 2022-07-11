<template>
  <div id="dep-attr">
    <div v-for="attr in attrs" :key="attr.id">
        <div class="attribute" v-if="!attr.leftCard">
            <div>{{attr.name}}</div>
            <h3>{{attr.value}} {{attr.unit}}</h3>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
        attrs: this.depAttrs

    };
  },
  props: ["depAttrs"]
};
</script>

<style scoped>
.attribute{
    border-bottom: 2px white solid;
}
#dep-attr {
    width: 100%;
    border: 2px white solid;
    margin-bottom: 10px;
}
</style>