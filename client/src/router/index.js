import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  	history: createWebHistory(import.meta.env.BASE_URL),
  	routes: [
    	{
      		path: '/products',
      		name: 'products',
      		component: () => import('../views/ProductsView.vue')
    	},
    	{
      		path: '/products/:id',
      		name: 'productDetails',
      		component: () => import('../views/ProductDetailsView.vue')
    	},
    	{
      		path: '/cart',
      		name: 'cart',
      		component: () => import('../views/CartView.vue')
    	},
		{
			path: '/',
			redirect: '/products'
		},
		{
			path: '/:pathMatch(.*)*',
			name: 'notFound',
			component: () => import('../views/NotFoundView.vue')
		}
  	]	
})

export default router