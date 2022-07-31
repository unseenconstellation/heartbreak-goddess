<template>
  <div>
    <div>
        <div>Health: {{you.currHealth}}/{{you.depAttributes.find((attr) => attr.name === "Health").value}} </div>
        <StatBar :ratio = "0.2"/>
        <div></div>
        <div></div>
    </div>
    <img id = "your-image" :src="you.image"/>
  </div>
</template>

<script>
import StatBar from './StatBar.vue'
export default {
  components: { StatBar },
    props: ["you"]

}
</script>

<style scoped>
#your-image{
    width: 30%;
    max-width: 200px;
    border: 3px white solid;
}
@media only screen and (min-width: 768px) {
  .example {background: blue;}
} 


</style>