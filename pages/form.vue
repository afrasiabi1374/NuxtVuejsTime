<template>
  <div>
      <app-text-input v-model="title"></app-text-input>
  </div>
</template>

<script>
import AppTextInput from '../components/UI/AppTextInput.vue'
export default {
    components: {
        AppTextInput
    },
    data(){
        return{
            title:''
        }
    },
    watch:{
        title(newVal){
            console.log('the value of title is ==>>>>>',newVal)
        }
    }
}
</script>

<style>

</style>