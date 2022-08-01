import { reactive, toRefs } from "vue";
const state = reactive({
    number: 1,
    character: {},
    gameOn: false,
    readyForPlay: false,
    metric: null,
    hasChar: false,
    yourChar: [],
    loadSelect: false,
    options: false,
    metric: null
    

})
export default function useGlobal(){
    function fuck(){
        console.log(state.gameOn)
        state.gameOn = !state.gameOn
    }
    return{
        ...toRefs(state), fuck
    }
}