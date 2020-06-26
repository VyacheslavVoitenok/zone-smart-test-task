<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'App',
	components: {
	},
	//проверка токена на валидность
	created: function() {
		axios.interceptors.response.use(undefined, function(error) {
			return new Promise(function (resolve, reject) {
				if(error.status == 401) {
					this.$store.dispatch('refresh_access_token')
					return resolve()
				}
				reject(error);
			})
		})
	}
}
</script>

<style lang='sass'>
body 
	height: 100vh
	display: flex
	justify-content: center
	align-items: center
	background: #F6F9FC
	margin: 0
	box-sizing: content-box

@font-face
    src: url(./assets/fonts/Robotobold.woff) format('woff')
    font-family: 'Roboto'
    font-weight: bold

@font-face
    src: url(./assets/fonts/Robotomedium.woff) format('woff')
    font-family: 'Roboto'
    font-weight: normal

@font-face
    src: url(./assets/fonts/Robotolight.woff) format('woff')
    font-family: 'Roboto'
    font-weight: lighter
</style>
