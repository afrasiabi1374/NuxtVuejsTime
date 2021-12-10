<template>
    <div>
        <h1>
            {{ title }}
        </h1>
    </div>
</template>

<script>
export default {

async asyncData({$axios}){
    const todo = await $axios.$get('https://jsonplaceholder.typicode.com/todos/1')
    return{
        title : todo.title
    }
},
data(){
    return{
        name: 'mohammad ali afrasiabi'
    }
}
}
</script>

<style>

</style>