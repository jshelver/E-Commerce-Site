<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<template>
  	<div class="container">
		<Navbar />
		<RouterView />
  	</div>
</template>

<style>
* {
	background-color: var(--dark-background);
	color: var(--dark-text-color);
}
</style>
