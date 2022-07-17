<template>
  <div id="image-submission">
    <b>Submit Your Own Character Image URL Here</b>
    <textarea  @input="adjustURL" />
    <img id="verify" @load="successFind" @error="errorFind" :src= "link" alt="">
    <button @click="changeImage">Use Link</button>
    <div v-if="warning">You need to upload a valid image. For this kind of game, you don't want a broken image character do you?</div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            link: "",
            error: false,
            warning: false
        }
    },
    methods:{
        errorFind(){
            this.error = true
        },
        adjustURL(e){
            this.link= e.target.value

        },
        changeImage(e){
            if(this.error){
                this.warning=true

            }else{
                this.warning = false
                this.$emit("upload-image", this.link)
            }

        },
        successFind(e){
            this.error = false
        }
    }

}
</script>

<style scoped>
#image-submission{
    max-width: 100%;
    display: flex;
    flex-direction: column;
    resize: none;
    align-items: center;
    flex-flow: column wrap;
    flex-grow:0%
}
#verify{
    width: 0%;
}
textarea{
    overflow-wrap: break-word;
    resize: none;
}

</style>