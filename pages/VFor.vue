<template>
  <div>
      <template v-for="(item, key , index) in items">
          <div :key="key">name : {{ item.name }} - key : {{ key }} - index: {{ index }}</div>
      </template>
  </div>
</template>

<script>
export default {
    data(){
        return{
            items:{
                a:{id:'one', name: 'k750'},
                b:{id:'two', name: 'k720'},
                c:{id:'tree', name: 's500'}
            }
        }
    }
}
</script>

<style>

</style>