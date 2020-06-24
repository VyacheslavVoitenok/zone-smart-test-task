import axios from 'axios'

export default {
    namespaced: true,

    state: {
        isAuthorized: false
    },
    mutations: {

    },
    actions: {
        async signIn(_, credentials) {
            try {
                let responce = await axios.post('https://zonesmart.su/api/auth/jwt/create/', {email: credentials.email, password: credentials.password})
                console.log({resp: responce})
                // localStorage.setItem('access_token', responce.data.access);
                // localStorage.setItem('refresh_token', responce.data.refresh);

                this.isAuthorized = true;
                console.log({auth: this.isAuthorized})

                // commit('IS_AUTH', true)
            } catch(error) {
                console.log({signInError: error})
            }
        }
    }
  }
  