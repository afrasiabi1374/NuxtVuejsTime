<template>
  <div>
      <h1>VUEX {{ loading }}</h1>
      ismobile : {{ ua.isMobile }}
      <div>{{ getTitle }}</div>
      <hr>
      <template v-if="getLoading">
          <div>loading</div>
      </template>
      <ul v-else>
          <li v-for="(item, index) in getData" :key="index" @click="clickItem(item)">
              {{ item.title }}
          </li>
      </ul>
   </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'
export default {
    fetchOnServer:false,
    data(){
        return {
            item: {},
            activeID: 0
        }
    },
    fetch(){
        
       return this.$store.dispatch('albums/fetchData')
    },
    computed: {
        ...mapGetters('albums',['getLoading', 'getData','getItemById']),
        //  بدون name space      ...mapGetters(['getLoading', 'getData']),
        ...mapState("albums", ['loading']),
        getTitle(){
            return this.getItemById(this.activeID)?.title || ''
        },
        ...mapState(['ua'])
    },
    methods: {
        clickItem(item){
            this.activeID = item.id
        }
    }
}
</script>

<style>

</style>