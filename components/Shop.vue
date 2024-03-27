<template>
	<section class="shop section" id="shop">
		<h2 class="section__title">THE BEST PLANTS</h2>

		<div class="shop__container container grid">
			<article
				class="shop__card"
				v-for="(card, index) in shopCards"
				:key="index"
			>
				<NuxtImg :src="card.img" alt="card.alt" class="shop__img" />

				<h3 class="shop__title" v-html="card.title"></h3>
				<span class="shop__price">${{ card.price }}</span>

				<button class="shop__button">
					<i class="ri-shopping-bag-line"></i>
				</button>
			</article>
		</div>
	</section>
</template>

<script setup>
import { ref } from 'vue'

const shopCards = ref([
	{
		title: 'Gymnocalycium <br> Cactus',
		img: 'shop-cactus-1.png',
		alt: 'shop-cactus-1',
		price: 15,
	},
	{
		title: 'Echeveria <br> Succulent',
		img: 'shop-cactus-2.png',
		alt: 'shop-cactus-2',
		price: 10,
	},
	{
		title: 'Ferocactus <br> Cactus',
		img: 'shop-cactus-3.png',
		alt: 'shop-cactus-3',
		price: 10,
	},
	{
		title: 'Key Lime Pie <br> Succulent',
		img: 'shop-cactus-4.png',
		alt: 'shop-cactus-4',
		price: 20,
	},
	{
		title: 'Melocactus <br> Cactus',
		img: 'shop-cactus-5.png',
		alt: 'shop-cactus-5',
		price: 14,
	},
])
</script>
