<template>
	<header :class="blurHeader ? 'blur-header' : ''" class="header" id="header">
		<Nav />
	</header>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'

onBeforeMount(() => {
	window.addEventListener('scroll', handleScroll)
})

const blurHeader = ref(false)

function handleScroll() {
	if (window.scrollY >= 100) {
		blurHeader.value = true
	} else {
		blurHeader.value = false
	}
}
</script>
