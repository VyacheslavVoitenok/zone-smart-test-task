import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		access_token: localStorage.getItem('access_token') || '',
		products: {}
	},

	mutations: {
		SET_PRODUCTS_TO_STATE(state, products) {
			state.products = products
		}
	},

	actions: {
		async getProductData({ commit }) {
			try {
				let response = await axios.get('https://zonesmart.su/api/v1/zonesmart/order/', {
					headers: {
						"Authorization": `JWT ${this.state.access_token}`
					}
				})
				commit('SET_PRODUCTS_TO_STATE', response.data.results)
				
			} catch (error) {
				console.log({getProductsError: error})
			}
		}
	},

	modules: {
		auth
	}
})
