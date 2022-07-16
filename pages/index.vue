<template>
  <div class="index-container">
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
    <br><br>
    <nuxt-link :to="{name: 'NuxtFetch'}">toSSR Fetch</nuxt-link>
    <br><br>
    <nuxt-link :to="{name: 'ErrorHandling'}">toSSR ErrorHandling</nuxt-link>
    <br>
    <br>
    <br>
    <nuxt-link :to="{name: 'NuxtMiddleware'}">middleware</nuxt-link>
    <br>
    <br>
    <br>
    <nuxt-link to="/Async-components">Async-components</nuxt-link>
    <h1>
      <nuxt-link to="/crud">CRUD</nuxt-link>
    </h1>
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
  ,
    mounted(){
      // const scrollHeight = Math.max(
      //   document.body.scrollHeight, document.documentElement.scrollHeight,
      //   document.body.offsetHeight, document.documentElement.offsetHeight,
      //   document.body.clientHeight, document.documentElement.clientHeight
      // );

      alert('Full document height, with scrolled out part: ' + document.querySelector('.index-container').scrollHeight);
      window.addEventListener('scroll', ()=>{
        console.log(document.querySelector('.index-container').getBoundingClientRect());
      })
    }
  }
</script>
