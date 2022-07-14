<template>
  <div id="aura-back">
    <h3>Auras</h3>
    <div id="auras">
      <div class="aura" v-for="aura in myAuras" :key="aura.id">
        <div>
            {{ aura.name }}
            </div>
            <div>
            {{ aura.value }}
            </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myAuras: this.auras,
    };
  },
  methods: {
    find() {
      console.log(this.myAura);
    },
  },
  props: ["auras"]
};
</script>

<style scoped>
#aura-back{
    border: 2px white double;
    margin-top: 4px;
}
#auras {
  display: flex;
  justify-content: space-around;
}
</style>