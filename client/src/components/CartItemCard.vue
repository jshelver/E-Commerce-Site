<script setup>

const props = defineProps(['product'])
</script>

<template>
    <div class="card-wrapper">
        <div class="product-detail-wrapper">
            <img :src="product.imageUrl" :alt="product.name" class="product-image">
            <div class="product-text-wrapper">
                <h1 class="product-name">{{ product.name }}</h1>
                <p class="product-price">${{ product.price }}</p>
            </div>
        </div>
        <button class="remove-button">Remove from Cart</button>
    </div>
</template>

<style scoped>
.card-wrapper {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.product-detail-wrapper {
    display: flex;
    align-items: center;
}

.product-image {
    background: none;
    width: 150px;
    object-fit: cover;
    border-radius: 15px;
}

.product-text-wrapper {
    margin-inline: 20px;
    display: flex;
    flex-direction: column;
    justify-content: start;
}

.product-name {
    margin-top: 5px;
    background: none;
    font-size: 1.2rem;
}

.product-price {
    margin-top: 5px;
    margin-bottom: 10px;
    background: none;
    font-size: 1rem;
}

.remove-button {
    cursor: pointer;
    background-color: var(--accent-color);
    color: var(--light-text-color);
    font-size: 1rem;
    font-weight: bold;
    width: 200px;
	height: 50px;
	border: none;
	border-radius: 15px;
    transition: all 0.05s ease-in-out;
}

.remove-button:hover {
    background-color: var(--hover-accent-color);
}

.remove-button:active {
    transform: scale(0.97);
}
</style>