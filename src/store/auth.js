import axios from 'axios'
import router from '@/router/router'

export default {
    namespaced: true,

    state: {
        status: '',
        access_token: localStorage.getItem('access_token') || '',
        refresh_token: localStorage.getItem('refresh_token') || '',
    },

    mutations: {
        AUTH_SUCCESS(state, { access_token, refresh_token }) {
            state.status = 'success'
            state.access_token = access_token
            state.refresh_token = refresh_token
        },

        AUTH_ERROR(state) {
            state.status = 'error'
        },

        UPDATE_ACCESS_TOKEN(state, refreshed_access_token) {
            state.access_token = refreshed_access_token
        }
    },

    actions: {
        async signIn({ commit }, credentials) {
            try {
                let responce = await axios.post('https://zonesmart.su/api/auth/jwt/create/', {email: credentials.email, password: credentials.password})

                localStorage.setItem('access_token', responce.data.access)
                localStorage.setItem('refresh_token', responce.data.refresh)

                let tokens = {
                    access_token: responce.data.access,
                    refresh_token: responce.data.refresh
                }

                commit('AUTH_SUCCESS', tokens)

                router.push('/table')

            } catch(error) {
                commit('AUTH_ERROR')
                localStorage.removeItem('access_token')
                localStorage.removeItem('refresh_token')
            }
        },

        async refresh_access_token({ commit }) {
            try {
                let refreshed_access_token = await axios.post('https://zonesmart.su/api/auth/jwt/refresh/', this.state.refresh_token)
                commit('UPDATE_ACCESS_TOKEN', refreshed_access_token)

            } catch(error) {
                console.log(error)
            }
        }

    },

    getters: {
        isLoggedIn: state => !!state.access_token && !!state.refresh_token,
        authStatus: state => state.status,
    }
}