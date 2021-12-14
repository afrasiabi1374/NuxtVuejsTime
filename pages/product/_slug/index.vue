<template>
  <div>
      <h1>{{ $route.params }}</h1>
  </div>
</template>

<script>
export default {
mounted(){
  console.log(this.$route.params)
}
}
</script>

<style>

</style>