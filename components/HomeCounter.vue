<template>
    <div>
        <h1>this is home counter</h1>
        <h3>{{ num }}</h3>
        <button @click="numberInHomeCMP++">pluser</button>
        <div @click="loger1">
            bi
            <h3 @click="loger2">this is init value {{ initValue }}</h3>
        </div>
    </div>
</template>
<script>
export default {
    props:{ 
        num:{
            type: Number,
            require: true,
            default: 0
        },
        initValue:{
            type: Number,
            default(){
                return this.num
            }
        }
     },
  data(){
    return{
      numberInHomeCMP:this.num
    }
  },
  methods:{
      loger1(){
        console.log('loger 1')
      },
      loger2(){
        console.log('loger 2')
      }
  }
  }
</script>

