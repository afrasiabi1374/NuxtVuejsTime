<template>
  <div>
    <h1>id validatetion success</h1>
  </div>
</template>

<script>
export default {
  validate({params, error}){
    //  error({statusCode:500, message:'خطا رخ داده است'})    
    // false اگر عدد نبود 
     return /^\d+$/.test(params.id)
  }
}
</script>

<style>

</style>
