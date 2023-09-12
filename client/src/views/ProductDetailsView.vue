<script setup>
import { useRouter } from 'vue-router';
import { products } from '../data/fake-data';
import NotFoundView from './NotFoundView.vue';

const route = useRouter();
const product = products.find(product => product.id === route.currentRoute.value.params.id);

</script>

<template>
	<div class="details-wrapper" v-if="product">
		<img :src="product.imageUrl" :alt="product.name" class="product-image">
		<h1 class="product-heading">{{ product.name }}</h1>
		<p class="product-rating">Average Rating:  {{ product.averageRating }}</p>
		<button class="cart-button">Add to Cart</button>
		<div class="description-wrapper">
			<h1 class="description-heading">Description</h1>
			<p class="description-content">{{ product.description }}</p>
		</div>
	</div>
	<NotFoundView v-else />
</template>

<style scoped>
.details-wrapper {
	min-height: calc(100vh - var(--navbar-height));
	display: flex;
	flex-direction: column;
	align-items: center;
}

.product-image {
	margin-top: 20px;
	width: 300px;
	height: 300px;
	object-fit: cover;
	border-radius: 15px;
}

.product-heading {
	margin-top: 20px;
	font-size: 2rem;
}

.product-rating {
	margin-top: 5px;
	font-size: 1rem;
}

.cart-button {
	margin-top: 20px;
	width: 300px;
	height: 50px;
	border: none;
	border-radius: 15px;
	background-color: var(--accent-color);
	color: var(--light-text-color);
	font-size: 1.2rem;
	font-weight: bold;
	cursor: pointer;
	transition: all 0.05s ease-in-out;
}

.cart-button:hover {
	background-color: var(--hover-accent-color);
}

.cart-button:active {
	transform: scale(0.97);
}

.description-wrapper {
	margin-top: 20px;
	width: 80%;
	max-width: 800px;
}

.description-heading {
	font-size: 1.5rem;
}

.description-content {
	margin-top: 5px;
	font-size: 0.9rem;
}
</style>