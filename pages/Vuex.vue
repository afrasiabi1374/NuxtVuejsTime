<template>
  <div>
      <h1>VUEX</h1>
      <template v-if="getLoading">
          <div>loading</div>
      </template>
      <ul v-else>
          <li v-for="(item, index) in getData" :key="index">
              {{ item.title }}
          </li>
      </ul>
   </div>
</template>

<script>
export default {
    fetchOnServer:false,
    fetch(){
        
       return this.$store.dispatch('fetchData')
    },
    computed: {
        getData(){
            return this.$store.getters.getData
        },
        getLoading(){
            return this.$store.getters.getLoading
        }
    }
}
</script>

<style>

</style>