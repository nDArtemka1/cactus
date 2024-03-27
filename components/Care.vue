<template>
	<section id="care" class="care section">
		<h2 class="section__title">
			CARE AND HEALTH FOR <br />
			YOUR CACTUS
		</h2>
		<div class="care__container container grid">
			<NuxtImg src="/care-cactus.png" alt="care-cactus" class="care__img" />

			<ul class="care__list">
				<li class="care__item" v-for="(item, index) in careItems" :key="index">
					<i class="ri-checkbox-fill"></i>
					<p>{{ item.p }}</p>
				</li>
			</ul>
		</div>
	</section>
</template>

<script setup>
import { ref } from 'vue'

const careItems = ref([
	{
		p: 'In cold times, add water once a month and during the summer do it when the soil is very dry.',
	},
	{
		p: 'Have good drainage so that the cactus does not accumulate water.',
	},
	{
		p: 'Place your cactus or succulent in a location with indirect light.',
	},
	{
		p: 'Do not water more than necessary, as it can accumulate too much water and the plant will rot.',
	},
	{
		p: 'Do not expose to high temperatures, as succulent plants are not fans of extremes.',
	},
])
</script>
