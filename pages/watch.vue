<template>
  <div>
      <h1>watch</h1>
      <button @click="count++">plus+</button>
      <button @click="changeObject">changeObject</button>
        {{ myObj.child.a }}
  </div>
</template>

<script>
export default {
    data(){
        return{
            count: 0,
            myObj:{
                child:{
                    a:1
                }
            }
        }
    },
    watch:{
        count:{
            handler(value,oldValue){
            console.log('new', value);
            console.log('old', oldValue);
        },
        immediate:true,
        },
        myObj:{
            handler(val){
                console.log('OBJECT', val)
            },
            deep:true
        }
    },
    methods:{
        changeObject(){
            this.myObj.child.a++
        }
    }
}
</script>

<style>

</style>