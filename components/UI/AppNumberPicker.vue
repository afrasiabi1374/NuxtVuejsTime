<template>
  <div>
      <button @click="mines">mines-</button>
      {{ value }}
      <button @click="plus">plus+</button>
  </div>
</template>

<script>
export default {
    model:{
        prop:'value',
        event:'change'
    },
    props:{
        value:{
            type:Number,
            required:true
        },
        minVal:{
            type:Number,
            default:0
        },
        maxVal:{
            type:Number,
            default:10
        },
    },
    methods:{
        plus(){
            if (this.value < this.maxVal) {
                this.$emit('change', this.value+1)
            }else if(this.value >= this.maxVal){
                alert('num must be smaler than ' + this.maxVal)
            }
        },
        mines(){
            if (this.value-1 >= this.minVal) {
                this.$emit('change', this.value-1)
            }else if(this.value <= this.minVal){
                alert('num must be bigger than '+ this.minVal)
            }
        }
    }
}
</script>

<style>

</style>