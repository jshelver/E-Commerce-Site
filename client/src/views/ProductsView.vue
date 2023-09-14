<script setup>
import { ref, onMounted } from 'vue';
import ProductCard from '../components/ProductCard.vue';
import axios from 'axios';

const products = ref([]);

onMounted(async () => {
	const response = await axios.get('/api/products/');
	products.value = response.data;
})

async function addTodo(e) {
	e.preventDefault();
	const response = await axios.post("/api/todoList/", {
		title: title.value,
		description: description.value
	});
	todos.value.push(response.data);
	title.value = "";
	description.value = "";
}

async function removeTodo(item, i) {
	await axios.delete("/api/todoList/" + item._id);
	todos.value.splice(i, 1);
}
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