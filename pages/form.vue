<template>
  <div>
      <app-text-input v-model="title"></app-text-input>
      <app-number-picker v-model="count"></app-number-picker>
  </div>
</template>

<script>
import AppNumberPicker from '../components/UI/AppNumberPicker.vue'
import AppTextInput from '../components/UI/AppTextInput.vue'
export default {
    components: {
        AppTextInput,
        AppNumberPicker
    },
    data(){
        return{
            title:'',
            count:1
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