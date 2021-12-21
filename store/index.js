export  const state = () => {
    return {
        data:null,
        loading:true
    }
}

export const mutations = {
    SET_DATA(state, payload){
        state.data = payload
    },
    SET_LOADING(state,payload){
        state.loading =  payload
    }
}

export const actions = {
    fetchData({commit}) {
        commit('SET_LOADING', true)
        return this.$axios
        .$get('https://jsonplaceholder.typicode.com/albums')
        .then((response)=>{
            console.log(response)
            commit("SET_DATA", response)
        }).catch((e)=>{
            console.log(e)
        }).finally(()=>{
            commit('SET_LOADING', false)
        })
    }
}

export const getters = {
    getData(state){
        return state.data
    },
    getLoading(state){
        return state.loading
    }
}
