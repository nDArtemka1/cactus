<template>
	<section class="new section" id="new">
		<div class="new__container container grid">
			<div class="new__data">
				<h2 class="section__title">
					NEW PLANTS FOR <br />
					YOUR HOME
				</h2>

				<p class="new__description">
					Select new ornamental plants for home decoration and obtain an
					atmosphere of harmony and freshness.
				</p>
			</div>

			<div class="new__content grid">
				<article
					class="new__card"
					v-for="(card, index) in newCards"
					:key="index"
				>
					<NuxtImg :src="card.img" alt="card.alt" class="new__img" />
					<h2 class="new__title">{{ card.title }}</h2>
				</article>
			</div>
		</div>
	</section>
</template>

<script setup>
import { ref } from 'vue'

const newCards = ref([
	{
		title: 'Gymnocalycium Cactus',
		img: 'new-cactus-1.png',
		alt: 'new-cactus-1',
	},
	{
		title: 'Lily Pad Succulent',
		img: 'new-cactus-2.png',
		alt: 'new-cactus-2',
	},
	{
		title: 'Rebutia Cactus',
		img: 'new-cactus-3.png',
		alt: 'new-cactus-3',
	},
])
</script>
