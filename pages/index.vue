<template>
  <div>
    <home-counter :num="number"></home-counter>
    <h1>index {{ number }}</h1>
    <button @click="number++">++</button>
    <br>
    <br>
    <br>
    <h2>
      <nuxt-link to="events">events</nuxt-link>
    </h2>
  </div>
</template>
<script>
import HomeCounter from '../components/HomeCounter.vue'
export default {
  components: { HomeCounter },
  data(){
    return{
      number:8
    }
  }
  }
</script>
