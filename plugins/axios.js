import qs from "qs"
import { handleErrors, handleResponse } from "../helpers/responseHelper.js"
const createInstance = ({$axios, ...context}) => {
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'application/json'
      }
    },
    paramsSerializer: (params)=>{
      return qs.stringify(params, {arrayFormat: 'brackets'})
    }
  })

  // Set baseURL to something different
  api.setBaseURL('http://ali74.mocklab.io')



  api._post = function (url, body, config = {}) {
    const {cc, ...requestConfig} = config
    return api
    .post(url, body, requestConfig)
    .then((response) => {
      return handleResponse(response, cc)
    })
    .catch((e) => {
      handleErrors(e, cc, context)
    })
  }

  api._get = function (url, config = {}) {
    const {cc, ...requestConfig} = config
    return api
    .get(url, requestConfig)
    .then((response) => {
      return handleResponse(response, cc)
    })
    .catch((e) => {
      handleErrors(e, cc, context)
    })
  }    
  return api
}
export default function (context, inject) {
  const {store} =  context
  // Create a custom axios instance
  const api  = createInstance(context)
  const auth = createInstance(context)
  auth.onRequest((config) => {
    config.headers.Authorization = 'Bearer ' + store.getters['auth/getToken']
  })
  // Inject to context as $api
  inject('api', api)
  inject('auth', auth)
}