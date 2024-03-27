<template>
	<ul class="nav__list">
		<li class="nav__item" v-for="navLink in navLinks" :key="navLink.name">
			<a
				class="nav__link"
				:href="'#' + navLink.path"
				:class="{ 'active-link': currentSection == navLink.path }"
				@click="navToggle = !navToggle"
				>{{ navLink.name }}</a
			>
		</li>
	</ul>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const navLinks = ref([
	{ name: 'Home', path: 'home' },
	{ name: 'New', path: 'new' },
	{ name: 'Shop', path: 'shop' },
	{ name: 'Care', path: 'care' },
	{ name: 'Contact', path: 'contact' },
])

const navToggle = useNavToggle()

const currentSection = ref('')

onMounted(() => {
	const observer = new IntersectionObserver(
		entries => {
			entries.forEach(entry => {
				if (entry.intersectionRatio > 0) {
					currentSection.value = entry.target.getAttribute('id')
				}
			})
		},
		{
			rootMargin: ' 0px 0px -70% 0px',
		}
	)

	document.querySelectorAll('section').forEach(section => {
		observer.observe(section)
	})
})
</script>
