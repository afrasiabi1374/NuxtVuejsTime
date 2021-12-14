<template>
  <div>
      title : <input type="text" v-on="{...$listeners,input}">
  </div>
</template>

<script>
export default {
    props:{
        value:{
            type:String,
            default:''
        }
    },
    methods:{
        input(e){
            this.$emit('input',e.target.value)
        }
    }
}
</script>

<style>

</style>