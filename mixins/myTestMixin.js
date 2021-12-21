export default {
    data(){
        return {
            a: 5
        }
    },
    methods:{
        test() {
            console.log('my test methods')
        }
    },
    mounted(){
        console.log('mounted from ======>>>>>>>>>> MIXINS')
    }
}