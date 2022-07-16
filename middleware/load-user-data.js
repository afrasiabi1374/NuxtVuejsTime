export default function ({
    store,
}) {

    const requestList = []
    const isAuthenticated =  store.getters['auth/isAuthenticated']
    if (isAuthenticated) {
        requestList.push(store.dispatch('profile/fetchIdentity'))
    }
    if (process.server) {
        return Promise.all(requestList)
    }else{
        Promise.all(requestList)
    }

}