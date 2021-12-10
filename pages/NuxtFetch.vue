<template>
  <div>
        <div v-if="$fetchState.pending">
            loading...
        </div>
        <h2 v-else>
          {{ title }}
        </h2>
  </div>
</template>

<script>
export default {
    data(){
        return{
            title: ''
        }
    },    
fetch(){
    return this.$axios
    .$get('https://jsonplaceholder.typicode.com/todos/1')
    .then((res)=>{
        this.title = res.title
    })
    .catch((err)=>{
        console.log(err)
    })
}
}
</script>

<style>

</style>