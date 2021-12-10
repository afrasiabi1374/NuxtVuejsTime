!<template>
  <div>
      <slot-component>
            <template #showName={fname}>
                <h1>insert yourname please</h1>
                <h3>my name is {{ fname }}</h3>
                <button>click me</button>
            </template>
      </slot-component>
  </div>
</template>

<script>
import SlotComponent from '../components/SlotComponent.vue'
export default {
    components: {
        SlotComponent
    }
}
</script>

<style>

</style>