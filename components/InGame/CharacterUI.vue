<template>
  <div id="character-ui">
    <div>
      <h4>{{ character.name }}</h4>
      <div>Hometown: {{character.homeTown}}</div>
      <div>
        Health:
        {{ character.currHealth }}/{{
          character.depAttributes.find((attr) => attr.name === "Health").value
        }}
      </div>
      <div></div>
      <StatBar :ratio="healthRatio" :color="'red'" />
      <div>
        Lust: {{ character.lust }}/{{
          character.depAttributes.find((attr) => attr.name === "Max-Lust").value
        }}
        <StatBar :ratio="lustRatio" :color="'magenta'" />
      </div>
      <div id="ui-attr">
        <div class = "attr-column">
          <div class="ui-attr-box" v-for="attr in character.attributes" :key="attr.id">
            <div>
              {{ attr.name }}
            </div>
            <div>
              {{ attr.value }}
            </div>
          </div>
        </div>
        <div class="ui-attr-box">
          <div v-for="attr in character.depAttributes.filter(attr=> !attr.leftCard && attr.name !== 'Health')" :key="attr.id" >
            <MetricDisplay
              v-if="!attr.leftCard && attr.name !== 'Health'"
              :attr="attr"
              class="ui-attr-box"
            />
          </div>
        </div>
      </div>
    </div>
    <img id="your-image" :src="character.image" />
    <div>
      <button>Clothes</button>
      <button>Inventory</button>
    </div>
    <div>Money: {{ character.money }}</div>
  </div>
</template>

<script>
import StatBar from "./UI/StatBar.vue";
import useGlobal from "../../store/globals";
export default {
  components: { StatBar },
  data() {
    const { character } = useGlobal();
    return {
      character,
      healthRatio: null,
      lustRatio: null,
    };
  },
  beforeMount() {
    this.healthRatio =
      this.character.currHealth /
      this.character.depAttributes.find((attr) => attr.name === "Health").value;
    this.lustRatio =
      this.character.lust /
      this.character.depAttributes.find((attr) => attr.name === "Max-Lust")
        .value;
  },
};
</script>

<style scoped>
#your-image {
  max-width: 280px;
  border: 3px white solid;
}
@media only screen and (min-width: 768px) {
  .example {
    background: blue;
  }
}
#character-ui {
  width: 280px;
  border: white solid 4px;
  display: flex;
  flex-direction: column;
}
#ui-attr {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}
.ui-attr-box{
  border-bottom: 2px solid white;
  width: 100%;
}
.attr-column{
  border-right: 2px solid white;
  width: 100%;
}
</style>