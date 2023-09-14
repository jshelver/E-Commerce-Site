<script setup>
import { ref, onMounted } from 'vue';
import CartItemCard from '../components/CartItemCard.vue';
import axios from 'axios';

// Only one user for now, so we can hardcode the user ID
const userId = '12345';
const cartItems = ref([]);

onMounted(async () => {
	const response = await axios.get(`/api/users/${userId}/cart`);
	cartItems.value = response.data.cartItems;
});

async function removeFromCart(productId) {
	const response = await axios.delete(`/api/users/${userId}/cart/${productId}`)
	cartItems.value = response.data.cartItems;
}
</script>

<template>
	<div class="cart-wrapper">
		<h1 class="cart-heading">Shopping Cart</h1>
		<hr class="hr">
		<div class="cart-items-wrapper" v-for="productId in cartItems">
			<CartItemCard  :productId="productId" :key="productId" v-on:removeCartItem="removeFromCart"/>
			<hr class="cart-hr">
		</div>
		<button class="checkout-button">Proceed to Checkout</button>
	</div>
</template>

<style scoped>
.cart-wrapper {
	min-height: calc(100vh - var(--navbar-height));
	display: flex;
	flex-direction: column;
	align-items: center;
}

.cart-heading {
	line-height: 3rem;
	margin-top: 20px;
	width: 80%;
	max-width: 800px;
}

.hr {
	width: 80%;
	max-width: 800px;
	border: 1px solid;
}

.cart-items-wrapper {
	width: calc(80%);
	max-width: 800px;
	display: flex;
	flex-direction: column;
}

.cart-hr {
	width: 100%;
	max-width: 800px;
	border: 1px solid;
}

.checkout-button {
	margin-top: 40px;
	width: 500px;
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

.checkout-button:hover {
	background-color: var(--hover-accent-color);
}

.checkout-button:active {
	transform: scale(0.97);
}
</style>