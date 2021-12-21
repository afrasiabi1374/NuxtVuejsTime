<template>
  <div>
    <h1>mixins</h1>
    <span>
      this is a : {{ a }}
    </span>
  </div>
</template>

<script>
import myTestMixin from '../mixins/myTestMixin.js'
export default {
    mixins:[myTestMixin],
    data(){
      return {
        a: 6
      }
    }
}
</script>

<style>

</style>