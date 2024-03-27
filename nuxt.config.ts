// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	modules: ['@nuxt/image'],
	image: {
		// dir: 'assets/img/',
		provider: 'twicpics',
		twicpics: {
			baseURL: 'https://ndartemka1.github.io/cactus/img/',
		},
	},
	app: {
		head: {
			title: 'Responsive Cactus Website',
			htmlAttrs: {
				lang: 'eng',
			},
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: './favicon.png' },
				{
					rel: 'stylesheet',
					href: 'https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.1.0/remixicon.min.css',
				},
			],
		},
	},
})
