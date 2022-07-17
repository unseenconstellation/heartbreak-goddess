<template>
  <div>
    <table>
        <tr v-for="col in map" :key = "map.indexOf(col)">

            <td
            :style="[square.choice &&{'background-color': 'green'}]"
            :class = "square.icon === 'p' && 'player'" class="battle-square" v-for = "square in col" :key="col.indexOf(square)">
                <img v-if="square.icon === 'p'" :src="character.image" alt=""/>
            </td>
        </tr>
    </table>
    <div @click="rangeCalcMap(skill, map, character)" v-for="skill in character.skills" :key = "character.skills.indexOf(skill)">
            {{skill.name}}
        </div>
        <button @click="makeNewMap"></button>
  </div>
</template>

<script>
import {randomMap, rangeCalc} from '../../store/MapGen'
export default {
    props:["character"],
    mounted(){
        ()=>{
            this.emptyMap = [...this.map]
        }
    },
    data(){
        return{
            map: randomMap(),
            skill:{
                name: "none"
            },
            emptyMap: []
        }
    },
    methods:{
        makeNewMap(){
            this.map = randomMap()
        },
        stuff(){
            console.log(this.map)
        },
        rangeCalc,
        rangeCalcMap(atk, map, char){
            this.map.forEach(row=>{
                row.forEach(square=>{
                    square.choice = false
                })
            })
            this.map=rangeCalc(atk, map, char)
        }
        

    }

}
</script>

<style>
.battle-square{
    width: 45px;
    height: 45px;
    border: 2px white solid;
}
.battle-square img{
    max-width: 100%;
    max-height: 100%;
    border-radius: 10%;
    border: 1px solid white;
}


</style>