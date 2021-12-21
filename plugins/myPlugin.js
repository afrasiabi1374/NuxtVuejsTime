export default function(context,inject){
    // inject("myTestPlugin",{
    //     test(){
    //         console.log('injection test in object');
    //     }
    // })

    inject("myTestPlugin",{
        test(){
            console.log('inject test at OBJ');
        }
    })
}