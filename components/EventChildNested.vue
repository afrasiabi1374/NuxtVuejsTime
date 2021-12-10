<template>
  <div>
        <h1>count is {{ x }}</h1>
      deep button
      <button @click="x++">plus inject</button>
      <h1 >attrs $attr is {{ $attrs }}</h1>
        my name is =->>>>>>>>>{{ name }}
  </div>
</template>

<script>
export default {
inheritAttrs:false,
props:['name'],
inject:['count'],
data(){
    return{
        x:this.count
    }
},
methods:{
    submit(){
        this.$nuxt.$emit('login', "iam login to your site :)))")
    }
},
}
</script>

<style>

</style>