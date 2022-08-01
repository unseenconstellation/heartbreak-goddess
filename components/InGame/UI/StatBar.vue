<template>
  <div class="bar">
    <div class = "amount" :style="{ backgroundColor: color, width: `${ratio * 100}%` }">
      {{ Math.round(ratio*100) }}%
    </div>
  </div>
</template>

<script>
export default {
  props: ["ratio", "color"],
};
</script>

<style scoped>
    .bar{
        border: 4px double white
    }
    .amount{

    }

</style>