<template>
  <div>
    <h1>id validatetion success</h1>
  </div>
</template>

<script>
export default {
  validate ({params, error}) {
    //  حالت ارور دستی
     error({statusCode:500, message:'جون دل ای جانم خطا رخ داده است'})    
    // false اگر عدد نبود 

    //  return /^\d+$/.test(params.id)
  },
  asyncData(){
    // در حالت ارور دستی
    // اگه برامون مهم هست که ای سینک دیتا بعد ولیدیت اجرا نشه  باید فالس رو ریترن کنیم
    console.log("async data is executed !")
  }
}
</script>

<style>

</style>
