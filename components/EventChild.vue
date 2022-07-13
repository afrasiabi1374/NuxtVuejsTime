<template>
  <div>
      <event-child-nested name='mostafa' familly="shirazizade" :birth="1385" />
      <hr/>
      <p>event Child</p>
      <button>submit</button>
  </div>
</template>

<script>
import EventChildNested from './EventChildNested.vue'
export default {
  components: { EventChildNested },

}
</script>

<style>

</style>