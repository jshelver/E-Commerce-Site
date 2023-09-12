<script setup>
import { products } from '../data/fake-data'
import ProductCard from '../components/ProductCard.vue'
</script>

<template>
	<div class="wrapper">
		<h1 class="products-heading">Products</h1>
		<hr class="hr">
		<div class="product-cards-wrapper">	
			<ProductCard v-for="product in products" :product="product" :key="product.id"/>
		</div>
	</div>
</template>

<style scoped>
.wrapper {
	min-height: calc(100vh - var(--navbar-height));
	display: flex;
	flex-direction: column;
	align-items: center;
}

.products-heading {
	line-height: 3rem;
	margin-top: 20px;
	width: 80%;
	max-width: 800px;
}

.hr {
	width: 80%;
	max-width: 800px;
	border: 1px solid;
	margin-bottom: 20px;
}

.product-cards-wrapper {
	width: calc(80% + 20px);
	max-width: 820px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
}
</style>