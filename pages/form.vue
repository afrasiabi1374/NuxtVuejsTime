<template>
  <div>
      <h1>form</h1>
      <!-- start  veevalidate -->
        <ValidationObserver v-slot="{ handleSubmit, reset }">
            <form @submit.prevent="handleSubmit(onSubmit)">
                <validation-provider  v-slot="{ errors }" name="number" rules="even" >
                    <label>number:</label>
                    <app-text-input  v-model="number" type="number"></app-text-input>
                    <span v-if="errors&&errors.length>0">{{ errors[0] }}</span>
                    <hr/>
                    <button type="submit">submit frm</button>
                    <button type="button" @click="reset">reset frm</button>
                </validation-provider>
            </form>
        </ValidationObserver>
      <!-- end veevalidate -->
      <br><br><br>
      <label>firstName:</label>
      <app-text-input v-model="title"></app-text-input>
      <br><br><br>
      <app-number-picker v-model="count"></app-number-picker>
  </div>
</template>

<script>
import {ValidationProvider,ValidationObserver,extend} from 'vee-validate'
import AppNumberPicker from '../components/UI/AppNumberPicker.vue'
import AppTextInput from '../components/UI/AppTextInput.vue'
extend('even', value => {
  return value % 2 === 0;
});
export default {
    components: {
        AppTextInput,
        AppNumberPicker,
        ValidationProvider,
        ValidationObserver
    },
    data(){
        return{
            title:'',
            count:1,
            number:''
        }
    },
    watch:{
        title(newVal){
            console.log('the value of title is ==>>>>>',newVal)
        }
    },
    methods:{
        onSubmit(){
            alert('submit is called')
        }
    }
}
</script>

<style>

</style>