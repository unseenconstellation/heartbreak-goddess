<template>
  <div id="points-remaining">
    <h2>Attribute Points Remaining</h2>
    <h3>{{pointsLeft}}</h3>
  </div>
</template>

<script>
export default {
    props:['pointsLeft']

}
</script>

<style>
#points-remaining{
    padding: 10px;
    border: pink 9px double;
}

</style>