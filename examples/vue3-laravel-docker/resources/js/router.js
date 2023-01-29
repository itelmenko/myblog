import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Error404 from "@/views/Error404.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'Error404',
        component: Error404,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
