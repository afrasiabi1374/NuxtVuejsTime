<template>
  <div>
      <ref-parent-child ref="myRef"></ref-parent-child>
      <button @click="resetChild">set from parent</button>
  </div>
</template>

<script>
import RefParentChild from '../components/RefParentChild.vue'
export default {
  components: { RefParentChild },
  data(){
      return{

      }
  },
  methods:{
      resetChild(){
        this.$refs.myRef.reset()
      }
  }

}
</script>

<style>

</style>