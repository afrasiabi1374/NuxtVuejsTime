<template>
  <div :class="{loading: $fetchState.pending}">
      <h1>form id : {{ this.$route.params.id }}</h1>
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
  fetchOnServer: false,
  name: 'UPDATE',
  components: {
      AppTextInput,
      AppForm
  },
  data() {
    return{
      form: {
        title: '',
        body: '',
        userId: ''
      },
      response: ''
    }
  },

  methods: {
    onSubmit() {
      this.$axios
      .$post('https://jsonplaceholder.typicode.com/posts', this.form)
      .then((response) => {
        this.form.title = ''
        this.form.body = ''
        this.form.userId = ''
        this.$refs.form.reset()
        this.response = response
      })
    }
  },
  async fetch() {
    try {      
      const response = await this.$axios
      .$get(`https://jsonplaceholder.typicode.com/posts/${ this.$route.params.id }`)
      this.form.title = await response.title
      this.form.body = await response.body
      this.form.userId = await response.userId
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<style scoped>
  .loading {
    opacity: .2;
    transition:  all 1s;
  }
  div {
    transition:  all 1s;
  }
</style>