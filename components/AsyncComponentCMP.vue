<template>
  <div>
     <h1>with scroll event</h1> 
  </div>
</template>

<script>
export default {
    name: 'ASYNCCOMPONENTCMP',
    created(){
        // eslint-disable-next-line
        window.addEventListener('scroll', this.handleScroll)
    },
    destroyed(){
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll(event){
            console.log('event scroll is : ', event)
        }
    }
}
</script>

<style>

</style>