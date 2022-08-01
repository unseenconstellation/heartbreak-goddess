<template>
  <div>
    <div>{{ attr.name }}</div>
    <div v-if="!metric || !attr.metricValue">{{ attr.value }} {{ attr.unit }}</div>
    <div v-else>{{ attr.metricValue }} {{ attr.metricUnit }}</div>
  </div>
</template>

<script>
import useGlobal from "../store/globals"
export default {
    data(){
        const {metric} = useGlobal()

        return{
            metric
        }
    },
  props: ["attr"],
};
</script>

<style>
</style>