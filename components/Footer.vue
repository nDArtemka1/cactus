<template>
	<footer class="footer">
		<div class="footer__container container grid">
			<div>
				<nuxt-link to="#" class="footer__logo"
					><i class="ri-cactus-line"></i>Cactus</nuxt-link
				>

				<p class="footer__description">
					Choose the best <br />
					plants for your home.
				</p>
			</div>

			<div class="footer__content grid">
				<div v-for="(item, index) in footerContentOne" :key="index">
					<h3 class="footer__title">{{ item.title }}</h3>
					<ul class="footer__links">
						<li v-for="(i, index) in item.ul" :key="index">
							<nuxt-link :to="i.link" class="footer__link">{{
								i.title
							}}</nuxt-link>
						</li>
					</ul>
				</div>

				<div>
					<h3 class="footer__title">SOCIAL MEDIA</h3>
					<div class="footer__social">
						<nuxt-link
							v-for="(item, index) in footerSocialLinks"
							:key="index"
							:to="item.link"
							class="footer__social-link"
							><i :class="item.icon"></i
						></nuxt-link>
					</div>
				</div>
			</div>
		</div>

		<span class="footer__copy">&#169; All Rights Reserved By Bedimcode</span>
	</footer>
</template>

<script setup>
import { ref } from 'vue'

const footerContentOne = ref([
	{
		title: 'COMPANY',
		ul: [
			{
				link: '#',
				title: 'About Us',
			},
			{
				link: '#',
				title: 'Products',
			},
			{
				link: '#',
				title: 'Features',
			},
		],
	},
	{
		title: 'INFORMATION',
		ul: [
			{
				link: '#',
				title: 'Blogs & News',
			},
			{
				link: '#',
				title: 'Contacts Us',
			},
			{
				link: '#',
				title: 'FAQs',
			},
		],
	},
])

const footerSocialLinks = ref([
	{
		link: 'https://www.facebook.com/',
		icon: 'ri-facebook-circle-fill',
	},
	{
		link: 'https://www.instagram.com/',
		icon: 'ri-instagram-fill',
	},
	{
		link: 'https://twitter.com/',
		icon: 'ri-twitter-x-line',
	},
])
</script>
