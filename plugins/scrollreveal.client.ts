import { defineNuxtPlugin } from '#app'
import scrollReveal from 'scrollreveal'

export default defineNuxtPlugin(nuxtApp => {
	nuxtApp.vueApp.use(scrollReveal)
	let data = scrollReveal({
		origin: 'top',
		distance: '80px',
		duration: 1500,
		delay: 300,
	})
	return {
		provide: {
			scrollReveal: data,
		},
	}
})
