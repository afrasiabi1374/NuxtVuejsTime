<template>
  <div>
      <input type="text" :value="title" placeholder="search todo" @input="search">
      <p v-if="loading">...loading</p>
      <ul v-else>
          <li v-for="item in list" :key="item.id">{{ item }}</li>
      </ul>
  </div>
</template>

<script>
export default {
    data(){
        return{
            loading:0,
            list:[],
            title:''
        }
    },
        fetch() {
            return this.service()
        },
    methods:{
        service(){
            if (this.source) {
                this.source.cancel('cancel by user')
            }
            this.source = this.$axios.CancelToken.source()
            this.loading++
            return this.$axios
            .$get('https://jsonplaceholder.typicode.com/todos',
            {
                cancelToken: this.source.token,
                params:{
                    title_like:this.title
                }
            })
            .then((response)=>{
                this.list = response 
                this.loading--
            })
            .catch((e)=>{
                console.log(e)
                this.loading--
            })
        },
        search(e){
            this.title = e.target.value
            this.service()
        }
    },
}
</script>

<style>

</style>