<template>
  <div>
      <h1>form</h1>
      <app-form :on-submit="onSubmit" ref="form">
        <div>


          <label>title :</label>
          <app-text-input
            v-model="form.title"
            :placeholder="$t('placeholder.default', [$t('title')])"
            name="title"
            rules="required"
          ></app-text-input>

          <label>body :</label>
          <app-text-input
            v-model="form.body"
            name="body"
            rules="required"
          ></app-text-input>

          <label>user id :</label>
          <app-text-input
            v-model="form.userId"
            name="userId"
            rules="required"
          ></app-text-input>


        </div>
        <br><br>
        <button type="submit">submit forms </button>
      </app-form>
  </div>
</template>

<script>
import AppTextInput from '~/components/UI/AppTextInput.vue'
import AppForm from '~/components/UI/AppForm.vue'

export default {
  name: 'CREATE',
  components: {
      AppTextInput,
      AppForm
  },
  data(){
    return{
      form: {
        title: '',
        body: '',
        userId: ''
      },
      name: ''
    }
  },

  methods:{
    onSubmit() {
      const cc = { ref: this.$refs.form } 
      this.$api
      ._post('/posts', {}, {cc} )
      .then(()=> {
      })

    }
  }
}
</script>

<style>

</style>