<template>
  <div id="player-main">
    <Name/>
  </div>
</template>

<script>

import Name from './MainInfo/Name.vue'
export default {
  components: { Name },

}
</script>


<style>
#player-main{
  align-self: flex-start;
  border: 3px white double;
}
</style>