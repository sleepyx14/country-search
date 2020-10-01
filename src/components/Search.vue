<template>
	<div class="search">
		<v-subheader class="grey--text">Search for a country!</v-subheader>
		<v-form class="px-3">
			<v-text-field label="Search" v-model="search" prepend-icon="mdi-map-search"></v-text-field>
			<v-btn text class="success mx-0 mt-3" @click="submit">Add Project</v-btn>
		</v-form>

		<div v-if="searchResults">
			<v-subheader class="grey--text">Team</v-subheader>
			<v-container class="my-5">
				<v-layout wrap>
					<v-flex xs12 sm6 md4 lg3 v-for="(res,index) in searchResults" :key="index">
						<v-card flat class="text-center ma-3">
							<v-responsive class="pt-4">
								<v-avatar size="100" class="grey lighten-2">
									<img :src="res.flag" :alt="res.name">
								</v-avatar>
							</v-responsive>
							<v-card-text>
								<div class="subheading">Country: {{ res.name }}</div>
								<div class="grey--text">Population: {{ res.population }}</div>
								<div class="grey--text">Capital: {{ res.capital }}</div>
								<div class="grey--text">Currency: {{ res.currency }}</div>
								<div class="grey--text">Languages: {{ res.languages }}</div>
								<div class="grey--text">Alternate Spellings: {{ res.altSpellings }}</div>
							</v-card-text>
							<v-actions>
								<v-btn text class="success mx-0 mt-3 mb-3">More details</v-btn>
							</v-actions>
						</v-card>
					</v-flex>
				</v-layout>
			</v-container>
		</div>

	</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
	data() {
		return{
			search:''
		}
	},
	methods: {
		async submit(){
			let qs = 'https://restcountries.eu/rest/v2/name/' + this.search
			let res = await fetch(qs)
			let countryInfo = await res.json()

			this.$store.dispatch('updateResults',countryInfo)
		},
	},
	computed: {
		...mapGetters(['searchResults'])
	}
}
</script>