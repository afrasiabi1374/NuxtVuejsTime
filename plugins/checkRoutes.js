export default function (context, inject) {
    const compare = (arr) => {
        return arr.some((item) => {
            if (item.regex) {
                //  اگر کلید ریجکس داشت
                console.log(item.regex);
                const re = new RegExp(item.regex.join('|'), 'g')
                return re.test(context.route.path)
            } else {
                //  crud اگرنداشت مثل 
                return item === context.route.path
            }
        })
    }
    inject('checkRoutes', {
        shouldInitAuth() {
            // console.log('compare', compare( process.env.authRoutes || [] )); out put booly
            return compare( process.env.authRoutes || [] )
        }
    })
}