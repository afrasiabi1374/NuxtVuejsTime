<template>
  <h1>
    hello you are at middleware.VUE!!!!!!
  </h1>
</template>

<script>
export default {
  name:'Middleware',
  // middleware:['auth']
  fetch(){
    return new Promise((resolve)=>{

      // setTimeout(() => {
      //   console.log("fetch resolved")
      //   resolve(true)
      // }, 3000)

    })
  }

}

</script>

<style>

</style>
