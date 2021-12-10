<template>
  <div>
        <div v-if="$fetchState.pending">
            loading...
        </div>
        <div v-else-if="$fetchState.error">
        /* حالت ‌B*/   {{ $fetchState.error.message }} 
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
    .$get('https://jsonplaceholder.typicode.com/todosfdfghfgf/1')
    .then((res)=>{
        this.title = res.title
    })
    .catch((e)=>{
        console.log(e)
        const statusCode = e?.response?.status||500
        const message=e?.response?.statusCode||'oops error'
    //   Aارور تمام صفحه
    //     if (process.server) {
    //         this.$nuxt.contex.res.statusCode = statusCode
    //     }
    // this.$nuxt.error({statusCode ,message});

    //  B  ارور  در قالب متن
    throw new Error(`${message} ${statusCode}`)
    })
}
}
</script>

<style>

</style>