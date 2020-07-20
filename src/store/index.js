import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		results: []
	},
	mutations: {
		updateResults: (state, payload) => {
			state.results = payload
		}
	},
	actions: {
		updateResults: (context,payload) => {
			context.commit('updateResults',payload)
		}
	},
	modules: {
	},
	getters:{
		searchResults: state => {
			if(state.results.length > 0)
				return state.results.map( country => {
					return {
						name: country.name,
						flag: country.flag,
						capital: country.capital,
						population: country.population,
						altSpellings: country.altSpellings.join(', '),
						languages: country.languages.map(lang => {
							if(lang.name !== lang.nativeName)
								return `${lang.name}, native name: ${lang.nativeName}`
							else
								return lang.name
						}).join(),
						currency: country.currencies.map(money => {
							return money.name
						}).join(),
					}
				})
			else
				return false
		}
	}
})
