export const handleResponse = (response, cc) => {
    if (response) {
        if (cc?.fullResponse) {
            return response
        } else {
            return response.data
        }
    }
}

export const handleErrors = (e, cc, {error}) => {
    if (e?.response?.status === 422) {
        const data = e.response.data
        for (const key in data) {
          cc.ref.addError(key, data[key])
        }
    }else if (e?.response?.status === 500) {
        const data = e.response.data
        console.log('Data', data)
        error({statusCode: 500, message: data})
    } else if (cc?.onError) {
        cc.onError(e?.response)
    }
}