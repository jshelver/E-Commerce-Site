<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav class="navbar">
        <div class="link-wrapper">
            <RouterLink to="/products" class="navbar-link">Products</RouterLink>
            <RouterLink to="/cart" class="navbar-link">Cart</RouterLink>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: var(--navbar-height);
    background-color: var(--navbar-dark-background);
}

.link-wrapper {
    background: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 220px;
    height: 100%;
}

.navbar-link {
    background: none;
    font-size: 1.8rem;
    color: var(--navbar-dark-text);
}

.navbar-link:hover {
    color: var(--accent-color);
}

.navbar-link:active {
    transform: scale(0.95);
}
</style>