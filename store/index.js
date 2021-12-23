import {uaParser} from '../helpers/ua.js'

const getDefaultState = () => {
    return {
        ua: {
            isMobile: false,
            isChrome: false,
            isTablet: false
        }
    }
}
export const state = getDefaultState

export const mutations = {
    UPDATE_USER_AGENT(state, payload) {
        state.ua = payload
    }
}

export const actions = {
    nuxtServerInit({commit}, {req}){
        const userAgent = req.headers['user-agent']
        const { isMobile, isChrome, isTablet } = uaParser(userAgent)

        commit('UPDATE_USER_AGENT', {
            isMobile,
            isChrome,
            isTablet
        })
    }
}