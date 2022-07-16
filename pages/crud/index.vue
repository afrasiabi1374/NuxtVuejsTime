<template>
  <div class="">
    <nuxt-link :to="localePath({name: 'crud-Create'})">
      <h1 class="create">
        create
      </h1>
    </nuxt-link>
    <!-- <crud-filter-form @onSubmit="service"></crud-filter-form> -->
    <template v-if="$fetchState.pending">
      <div>loading...</div>
    </template>

    <template v-else>
      <div class="container" v-for="item in posts" :key="item.id" :class="['all', loading ? 'halfOpacity' : '']" >
        <div>
          <div><h2>title : </h2>{{ item.title }}</div>
          <div><h2>body : </h2>{{ item.body }}</div>
        </div>
        <div>
          <nuxt-link
            :to="localePath({ name: 'crud-update-id', params: { id: item.id } })"
          >
          <h2 class="update">update</h2>
          </nuxt-link>
        </div>
        <div>
          <h3 class="delete" @click="deleteItem(item.id)">delete</h3>
        </div>
      </div>
    </template>
    <template v-if="isEmpty">
      <h1>
        list is empty!
      </h1>
    </template>
  </div>
</template>

<script>
// import CrudFilterForm from '../../../components/views/crud/CrudFilterForm.vue'
export default {
  // components: { CrudFilterForm },
  name: 'CrudIndex',
  fetch() {
    return this.service()
  },
  data(){
    return {
      posts: [],
      loading: false
    }
  },
  methods: {
    async service (params = {}) {        
      this.loading = true
      try {    
        this.posts = await this.$api
        ._get(
          'https://jsonplaceholder.typicode.com/posts',
          { params }
        )
      } catch (error) {
        console.log(error)
      }
      this.loading = false
    },
    deleteItem(id) {
      this.$axios
      .$delete('https://jsonplaceholder.typicode.com/posts/' + id)
      .then((res)=>{
        this.posts = this.posts.filter( (item) => item.id !== id)
      })
      .catch((e) => {
        console.log(e)
      })
    }
  },
  computed:{
    isEmpty() {
      return !this.loading&&!this.$fetchState.pending&&this.posts.length === 0
    }
  }
}
</script>

<style scoped>
  .create {
    color: green;
  }
  .update {
    color: cornflowerblue;
  }
  a {
    text-decoration: none;
  }

  .halfOpacity { 
    opacity: .3;
    transition: all 2s;
  }
  .container {
    border: 2px solid gray;
    padding: 10px;
    margin-top: 8px;
  }
  .delete {
    cursor: pointer;
    color: tomato;
  }
</style>