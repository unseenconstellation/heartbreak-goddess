<template>
  <div @click="find">
    You're hot,
    {{character.name}}
  </div>
</template>

<script>
export default {
    props: ["character"],
    methods:{
        find(){
            console.log(this.character)
        }
    }


}
</script>

<style>

</style>