<template>
  <div @click="find">
    You're hot,
    {{character.name}}
  </div>
</template>

<script>
import {characters} from '../store/Characters'
export default {
    props: ["character"],
    methods:{
        find(){
            console.log(this.character)
            console.log(characters)
        }
    }


}
</script>

<style>

</style>