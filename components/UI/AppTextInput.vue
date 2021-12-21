<template>
    <input type="text" v-on="{...$listeners,input}">
</template>

<script>
export default {
    props:{
        value:{
            type:String,
            default:''
        }
    },
    methods:{
        input(e){
            this.$emit('input',e.target.value)
        }
    }
}
</script>

<style>

</style>