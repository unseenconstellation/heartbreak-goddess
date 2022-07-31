<template>
  <div class="bar">
    <div class = "amount" :style="{ backgroundColor: 'red', width: `${ratio * 100}%` }">
      {{ ratio }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["ratio"],
};
</script>

<style scoped>
    .bar{
        border: 4px double white
    }
    .amount{

    }

</style>