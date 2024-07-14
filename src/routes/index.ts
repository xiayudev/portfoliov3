import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../modules/portfolio/pages/HomePage.vue";

export const routes = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: 'home',
            component: HomePage
        }
    ]
})