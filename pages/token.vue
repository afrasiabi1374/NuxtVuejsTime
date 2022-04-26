<template>
    <div>
        <h1>token</h1>
        <button @click="saveToken">
           save mock token 
        </button>
        <nuxt-link to="/crud">to crud</nuxt-link>
    </div>
</template>
<script>
    export default {
        name: 'Token',
        methods: {
            saveToken(){
                this.$store.dispatch('auth/saveToken', {
                    access_token: "dfdfd",
                    refresh_token: "121345",
                    expires_in: 17111374
                })   
            }
        }
    }
</script>
<style scope></style>
