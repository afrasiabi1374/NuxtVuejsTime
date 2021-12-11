<template>
  <div>
        <div v-if="$fetchState.pending">
            loading...
        </div>
        <div v-else-if="$fetchState.error">
            {{ $fetchState.error.message }}
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
        .$get('https://jsonplaceholder.typicode.com/todos/kharab1')
        .then((response)=>{
            this.title = response.title
        })
        .catch((e)=>{
             const statusCode = e?.response?.status||500
             const message = e?.response?.statusText||'there is an error'
            // if(process.server){
            //     this.$nuxt.context.res.statusCode = statusCode
            //     this.$nuxt.error({statusCode, message})
            // }
            throw new Error(`${ message } => ${statusCode}`)
        })
    }
}
</script>

<style>

</style>