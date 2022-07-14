<template>
  <div @click="find">
    You're hot,
    {{character.name}}
  </div>
</template>

<script>
import {characters} from '../store/Characters'
import {adjust} from '../store/Adjust'
export default {
    props: ["character"],
    methods:{
        find(){
            console.log(this.character)
            console.log(characters)
            adjust(this.character.id)
        }
    }


}
</script>

<style>

</style>