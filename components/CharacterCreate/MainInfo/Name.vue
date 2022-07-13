<template>
  <div id="your-name">
    <label for="name"><h3>Name:</h3></label>
    <input @input="changeName" type="text" id="name" name="name" />
  </div>
</template>

<script>
export default {
  methods: {
    changeName(e){
      this.$emit("changeName",e.target.value)

    }
  },
};
</script>

<style scoped>
</style>