<template>
  <div>
    <div>
      params : {{  $route.params.pathMatch.split('/') }}
    </div>
    <div>
      query : {{ $route.query }}
    </div>
  </div>
</template>

<script>
export default {
  beforeMount(){
    console.log(this.$route.query)
  }
}
</script>

<style>

</style>