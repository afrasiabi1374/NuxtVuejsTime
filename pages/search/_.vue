<template>
  <div>
        <h1>search</h1>
        <button @click="pushQuery">push query</button>
        <button @click="appendQuery">append query</button>
        <h2>
            infiteParams ===>>>>{{ $route.params.pathMatch.split('/') }}
        </h2>
        <nuxt-link :to="{name:'product-slug', params:{ slug: 'samsong-S5' } }">go to product</nuxt-link>
        <h2>query : {{ $route.query }}</h2>
  </div>
</template>
<script>
export default {
    computed:{
        getParams(){
            return this.$route.params.pathMatch.split('/')
        }
    },
    beforeMount(){
        console.log('query',this.$route.query)
    },
    mounted(){
        console.log('infite',this.$route.params.pathMatch.split('/'))
        // ری دایرکت 
        // setTimeout(()=>{
        //     this.$router.push({ name:'product-slug', params:{slug:'samsong-S5'} })
        // }, 3000)
    },
    methods:{
        pushQuery(){
            this.$router.push({query:{search_key:'samsong',brand_id:['slugA','slugB']}})
        },
        appendQuery(){
             this.$router.push({query:{ ...this.$route.query, name: 'mostafa' }})

        }
    }
}
</script>

<style>

</style>