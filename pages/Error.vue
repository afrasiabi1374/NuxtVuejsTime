<template>
  <div>
    <div v-if="$fetchState.pending">
      loading...
    </div>
    <div v-else-if="list.length > 1">
      <h2>Content</h2>
      <h1>CRUD ERROR page</h1>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ERROR',
    data() {
      return {
        list: []
      }
    },
    fetch({$api}) {
     return  $api
      ._get('/posts2')
      .then((res)=> {
        console.log('response ==>>>', res)
        if (res !== undefined) {
          this.list = res
        }
      })
    }
}
</script>

<style>

</style>