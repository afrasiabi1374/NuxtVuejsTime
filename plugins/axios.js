import qs from "qs"
import { handleErrors, handleResponse } from "../helpers/responseHelper.js"

export default function ({store,$axios,...context }, inject) {
  // Create a custom axios instance
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

  api.onRequest((config) => {
    config.headers.Authorization = 'Bearer' + store.getters['auth/getToken']
  })

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
  // Inject to context as $api
  inject('api', api)
}