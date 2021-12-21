<template>
  <div>
      <h1>
          with scroll event
      </h1>

  </div>
</template>

<script>

export default {
    mounted () {
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll(event) {
            console.log('event scroll is :', event())
        }
    }
}
</script>

<style>

</style>