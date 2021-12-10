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
    <nuxt-link :to="{name: 'NuxtLife'}">toSSR asyncData</nuxt-link>
    <nuxt-link :to="{name: 'NuxtFetch'}">toSSR Fetch</nuxt-link>
    <nuxt-link :to="{name: 'ErrorHandling'}">toSSR ErrorHandling</nuxt-link>
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
