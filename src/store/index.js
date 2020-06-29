import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		access_token: localStorage.getItem('access_token') || '',
		products: {},
		amount_of_prosucts: null,
		checkedItemsIds: []
	},

	mutations: {
		SET_PRODUCTS_TO_STATE(state, products) {
			state.products = products.results
			state.amount_of_prosucts = products.count
		},
		SAVE_ITEM_ID(state, id) {
			if(!this.state.checkedItemsId.includes(id)) {
				return state.checkedItemsIds.push(id)
			}
			let itemIndex = state.checkedItemsIds.indexOf(id)
			state.checkedItemsIds.splice(itemIndex, 1)
		}
	},

	actions: {
		async getProductData({ commit }, { limit, offset }) {
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
		},

		saveCheckedIds({ commit }, id) {
			commit('SAVE_ITEM_ID', id)
		}
	},

	modules: {
		auth
	}
})
