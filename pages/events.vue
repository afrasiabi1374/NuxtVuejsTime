<template>
  <div>
      <event-child/>
      <h1>root count:{{ count }}</h1>
      <div :class="[count%2===0?'ali':'aliA','ita']">hello</div>
      <button @click="count++">root  plus plus</button>
  </div>
</template>

<script>
import EventChild from '../components/EventChild.vue'
export default {
  components: { EventChild },
  provide(){
    return{
      count: this.count
    }
  },
  data(){
    return{
      count :0
    }
  },
  mounted(){
    this.$nuxt.$on('login', this.loging)
  },
  destroyed(){
      this.$nuxt.$off(this.loging)
  },
  methods:{
    loging(param){
      console.log(param);
    }
  }
}
</script>

<style>
.ali{
  transition: all 4s ease-in-out;
  width: 300px;
  height: 300px;
  background-color: aquamarine;
}
.aliA{
  transition: all 4s ease-in-out;
  width: 300px;
  height: 300px;
  background-color: palevioletred;
}
.ita{
  font-style: italic;
}
</style>