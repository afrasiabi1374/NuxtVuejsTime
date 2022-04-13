<template>
  <validation-provider v-slot="{ errors }" :name="name" :rules="rules">
    <div>
      <input
        :type="type"
        v-bind="$attrs"
        :value="value"
        v-on="{ ...$listeners, input }"
      />
    </div>

    <div v-if="errors && errors.length > 0">{{ errors[0] }}</div>
  </validation-provider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
export default {
  name: 'AppTextInput',
  components: { ValidationProvider },
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    rules: {
      type: String,
      default: '',
    },
  },
  methods: {
    input(e) {
      this.$emit('input', e.target.value)
    },
  },
}
</script>

<style scoped></style>
