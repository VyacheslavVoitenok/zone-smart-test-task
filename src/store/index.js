import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		access_token: localStorage.getItem('access_token') || '',
		products: {},
		amount_of_prosucts: null
	},

	mutations: {
		SET_PRODUCTS_TO_STATE(state, products) {
			state.products = products.results
			state.amount_of_prosucts = products.count
		}
	},

	actions: {
		async getProductData({ commit }, { limit, offset }) {
			console.log(limit, offset)
			try {
				let response = await axios.get(`https://zonesmart.su/api/v1/zonesmart/order/?limit=${limit}&offset=${offset}`, {
					headers: {
						"Authorization": `JWT ${this.state.access_token}`
					}
				})
				commit('SET_PRODUCTS_TO_STATE', response.data)
				
			} catch (error) {
				console.log({getProductsError: error})
			}
		}
	},

	modules: {
		auth
	}
})
