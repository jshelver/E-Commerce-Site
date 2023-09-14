<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps(['product'])
</script>

<template>
    <div class="card-wrapper">
        <RouterLink :to="'/products/' + product.id">
            <img :src="product.imageUrl" :alt="product.name" class="product-image">
            <h1 class="product-name">{{ product.name }}</h1>
            <p class="product-price">${{ product.price }}</p>
        </RouterLink>
    </div>
</template>

<style scoped>
.card-wrapper {
    overflow: hidden;
    cursor: pointer;
    width: 240px;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
    transition: all 0.05s ease-in-out;
    margin-inline: 10px;
    margin-bottom: 30px;
}

.card-wrapper:hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
}

.card-wrapper:active {
    transform: scale(0.98);
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.8);
}

.product-image {
    background: none;
    width: 100%;
    object-fit: cover;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}

.product-name {
    margin-top: 5px;
    margin-inline: 10px;
    background: none;
    font-size: 1.3rem;
    text-align: center;
}

.product-price {
    margin-top: 5px;
    margin-inline: 10px;
    margin-bottom: 10px;
    background: none;
    font-size: 1.1rem;
    text-align: center;
}
</style>