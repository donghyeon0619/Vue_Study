import {createRouter, createWebHistory} from "vue-router";
import HomeView from "@/views/HomeView.vue";

const routes = [
    {
        path: '/home1',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/test',
        name: 'Test',
        // vite에서 사용하는 Lazy Load(지연 로드) 코드
        component: () => import("../views/Test.vue")
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router