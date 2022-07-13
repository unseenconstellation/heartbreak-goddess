<template>
  <div id="dep-attr">
    <div v-for="attr in attrs"  :key="attr.id">
      <div class="attribute">
        <div>{{ attr.name }}</div>
        <div>{{ attr.value }} {{ attr.unit }}</div>
      </div>
    </div>
    <div>
     <div>
      Money
      </div>
      <div>
        {{money}}
        </div> 
    </div>
    <div>
    <div>
      Experience
      </div>
      <div>
        {{exp}}
        </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      attrs: this.depAttrs.filter(attr=>{ return attr.leftCard}),
    };
  },
  props: ["depAttrs","exp","money"],
};
</script>

<style scoped>

#dep-attr {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 2px white solid;
  margin-bottom: 10px;
  flex-wrap: wrap;
}
</style>