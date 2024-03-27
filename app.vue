<template>
	<Header />
	<main class="main">
		<Home />
		<New />
		<Shop />
		<Care />
		<Contact />
	</main>
	<Footer />

	<a :class="showScroll ? 'show-scroll' : ''" href="#home" class="scrollup"
		><i class="ri-arrow-up-line"></i
	></a>
</template>

<script setup>
import { ref, onBeforeMount, onMounted } from 'vue'

onBeforeMount(() => {
	window.addEventListener('scroll', handleScroll)
})

const showScroll = ref(false)

function handleScroll() {
	if (window.scrollY >= 350) {
		showScroll.value = true
	} else {
		showScroll.value = false
	}
}

// Import scrollReveal
const { $scrollReveal } = useNuxtApp()

onMounted(() => {
	if (process.client) {
		retScroll($scrollReveal)
	}
})

const retScroll = data => {
	data.reveal(`.home__img, .new__data, .care__img, .contact__content, .footer`)
	data.reveal(`.home__data, .contact__img`, { delay: 500 })
	data.reveal(`.new__card, .care__item`, { delay: 500, interval: 100 })
	data.reveal(`.shop__card`, { interval: 100 })
}
</script>

<style src="@/assets/scss/styles.scss"></style>
