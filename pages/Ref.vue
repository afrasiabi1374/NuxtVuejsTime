<template>
  <div>
    <ref-parent-child ref="myNewRef"></ref-parent-child>
    <button @click="resetChild">reset child at parent</button>
    <hr>
    <div>
      <span>parent Count : {{ parentCount }}</span>
    </div>
  </div>
</template>

<script>
import RefParentChild from "../components/RefParentChild.vue"

export default {
  components: { RefParentChild },
  data(){
    return{
      parentCount: 0
    }
  },
  methods:{
    resetChild(){
      this.$refs.myNewRef.reset()
    }
  }
}
</script>

<style>

</style>