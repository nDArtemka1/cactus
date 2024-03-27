<template>
	<section class="contact section" id="contact">
		<h2 class="section__title">
			YOU WANT A CACTUS <br />
			CONTACT US
		</h2>

		<div class="contact__container container grid">
			<NuxtImg
				src="contact-cactus.png"
				alt="contact-cactus"
				class="contact__img"
			/>

			<div class="contact__content">
				<div>
					<h3 class="contact__title">Write to us</h3>

					<div class="contact__social">
						<nuxt-link
							v-for="(item, index) in contactSocial"
							:key="index"
							:to="item.link"
							target="_blank"
							><i :class="item.i"></i
						></nuxt-link>
					</div>
				</div>

				<div v-for="(item, index) in contactContentBottom" :key="index">
					<h3 class="contact__title">{{ item.title }}</h3>

					<address class="contact__info" v-html="item.address"></address>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { ref } from 'vue'

const contactSocial = ref([
	{
		link: 'https://api.whatsapp.com/send?phone=554353246789&text=Hello, more information!',
		i: 'ri-whatsapp-fill',
	},
	{
		link: 'https://m.me/bedimcxzccode',
		i: 'ri-messenger-fill',
	},
	{
		link: 'mailto:exampldsadmail@correo.com',
		i: 'ri-mail-fill',
	},
])

const contactContentBottom = ref([
	{
		title: 'Find us here',
		address: '+00-987-7654-321 <br /> +11-012345',
	},
	{
		title: 'Call us at the numbers',
		address: 'Lima - Sun City - Peru <br /> Av. Moon #4321',
	},
])
</script>
