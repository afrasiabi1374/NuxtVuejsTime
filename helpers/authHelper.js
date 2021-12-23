export const loadAuth = async ({
  store,
  // $cookies,
  redirect,
  $checkRoutes,
  // route,
}) => {
  if (process.server) {
    return false
  }
  await store.dispatch('auth/initAuth')
  if ($checkRoutes.shouldInitAuth()) {
    const isAuthenticated = store.getters['auth/isAuthenticated']
    if (!isAuthenticated) {
      // $cookies.set('login-callback', route.path, {
      //   path: '/',
      //   maxAge: 60 * 60,
      // })
      return redirect('/auth')
    }
  }
}
export const loadUserData = ({ store }) => {
  if (process.server) {
    return false
  }
  const requestList = []
  const isAuthenticated = store.getters['auth/isAuthenticated']
  if (isAuthenticated) {
    requestList.push(store.dispatch('profile/fetchIdentity'))
  }
  if (process.server) {
    return Promise.all(requestList)
  } else {
    Promise.all(requestList)
  }
}
