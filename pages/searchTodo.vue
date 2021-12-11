<template>
  <div>
      <h1 class="title">search to do</h1>
      <input type="text" :value="title" @input="onInput">
      <p v-if="loading" class="loader"></p>
      <ul v-else>
          <li v-for="item in list" :key="item.id">{{ item }}</li>
      </ul>
  </div>
</template>

<script>
export default {
    data(){
        return{
            title: '',
            list:[],
            loading:false
        }
    },
    fetch(){
        return this.service()
    },
    methods:{
        onInput(e){
            this.title = e.target.value
            // فراخوانی فچمون 
            this.service()
        },
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
                title_like: this.title
            }}
            )
            .then((res)=>{
                this.list = res
                this.loading = false
            })
            .catch((e)=>{
                this.loading--
                console.log(e)
            })
        }
    }
}
</script>

<style>
    .title{
        text-align: center;
    }
    li{
        transition: all 1s;
        animation: a;
        animation-duration: 4s;
        animation-fill-mode: both;
    }
    @keyframes a {
            from{
                opacity: 0;
            }
            to{
                opacity: 1;
            }
    }

</style>