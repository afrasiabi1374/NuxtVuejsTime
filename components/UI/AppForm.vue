<template>
  <validation-observer v-slot="{ handleSubmit }" ref="validation">
    <form @submit.prevent="handleSubmit(onSubmit)">
      <slot></slot>
    </form>
  </validation-observer>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
export default {
  name: 'AppForm',
  components: {
    ValidationObserver,
  },
  props: {
    onSubmit: {
      type: Function,
      required: true,
    },
  },
  methods: {
    addError(key, value) {
      this.$refs.validation.setErrors({
        [key]: value,
      })
    },
    reset() {
      console.log('reset called', this.$ref)
      this.$refs.validation.reset()
    },
  },
}
</script>

<style scoped></style>
