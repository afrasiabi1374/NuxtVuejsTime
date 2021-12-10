<template>
  <div>
      <h2>chid component</h2>
      <button @click="count+=2">count at child : {{ count }}</button>
      <hr>
      <button @click="updateParent">update parent at child</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            count: 0
        }
    },
    methods:{
        reset(){
            this.count = 0
        },
        updateParent(){
            this.$parent.parentCount++
        }
    }
}
</script>

<style>

</style>