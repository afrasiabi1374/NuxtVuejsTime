<template>
  <div>
      <h1>plugin</h1>
  </div>
</template>

<script>
export default {
    name: 'Plugin',
    asyncData({$myTestPlugin}){
        console.log('$myTestPlugin at async data');
        $myTestPlugin.test()
    },
    fetch(){
        console.log('$myTestPlugin at async data');
        this.$myTestPlugin.test()
    }
}
</script>

<style>

</style>