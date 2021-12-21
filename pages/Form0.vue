<template>
  <div>
      <h1>form</h1>
      <app-form @submit="onSubmit">
        <div>
          <title>title : </title>
          <app-text-input
          v-model="form.title"
          :placeholder="$t('placeholder.default', [$t('title')])"
          name="title"
          rules="required"
          />
        </div>
        <div>
          <title>body : </title>
          <app-text-input
          v-model="form.body"
          name="body"
          rules="required"
          />
        </div>
        <div>
          <title>user id : </title>
          <app-text-input
          v-model="form.userId"
          name="body"
          rules="required"
          />
        </div>
      </app-form>
  </div>
</template>

<script>
import AppForm from '../components/UI/AppForm.vue'
import AppTextInput from '../components/UI/AppTextInput.vue'
export default {
  components:{
    AppForm,
    AppTextInput
  }
}
</script>

<style
AppForm>

</style>