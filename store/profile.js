import Vue from 'vue'
const getDefaultState = () => {
    return {
        identity: {}
    }
}

export const state = getDefaultState

export const getters = {
    getDisplayName(state){
        return state.identity.email || state.identity.username || ''
    }
}

export const mutations = {
    SET_IDENTITY(state, payload){
        Vue.set(state, 'identity', payload)
    }
}

export const actions = {
    fetchIdentity({commit}) {
        const cc = {}
        return this.$auth
        ._get('/site/identity', {cc})
        .then((response) => {
            commit('SET_IDENTITY', response)
        })
    }
}