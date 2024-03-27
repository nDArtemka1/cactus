<template>
	<nav class="nav container">
		<nuxt-link to="#" class="nav__logo"
			><i class="ri-cactus-line"></i> Cactus</nuxt-link
		>

		<div :class="{ 'show-menu': navToggle }" class="nav__menu">
			<nuxt-link
				to="#"
				class="nav__logo nav__logo-m"
				@click="navToggle = !navToggle"
				><i class="ri-cactus-line"></i> Cactus</nuxt-link
			>
			<div class="nav__close" @click="navToggle = !navToggle">
				<i class="ri-close-line"></i>
			</div>
			<NavList />
		</div>

		<div class="nav__actions">
			<i class="ri-shopping-cart-line"></i>

			<div class="nav__toggle" @click="navToggle = !navToggle">
				<i class="ri-menu-3-line"></i>
			</div>
		</div>
	</nav>
</template>

<script setup>
const navToggle = useNavToggle()
</script>
