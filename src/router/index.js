import {createRouter, createWebHistory} from "vue-router";
import HomeView from "@/views/HomeView.vue";
import DataBinding from "@/views/DataBinding.vue";
import DataBindingHtml from "@/views/DataBindingHtml.vue";
import DataBindingAttribute from "@/views/DataBindingAttribute.vue";
import EventHandle from "@/views/EventHandle.vue";
import Computed from "@/views/Computed.vue";
import NestedComponent from "@/views/NestedComponent.vue";
import ParentComponent from "@/views/ParentComponent.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/test',
        name: 'Test',
        // vite에서 사용하는 Lazy Load(지연 로드) 코드
        component: () => import("../views/Test.vue")
    },
    {
        path: '/databinding',
        name: 'DataBinding',
        component: DataBinding
    },
    {
        path: '/databindingattribute',
        name: 'DataBindingAttribute',
        component: DataBindingAttribute
    },
    {
        path: '/databindinghtml',
        name: 'DataBindingHtml',
        component: DataBindingHtml
    },
    {
        path: '/eventhandle',
        name: 'EventHandle',
        component: EventHandle
    },
    {
        path: '/computed',
        name: 'Computed',
        component: Computed,
    },
    {
        path: '/nestedcomponent',
        name: 'NestedComponent',
        component: NestedComponent,
    },
    {
        path: '/parentcomponent',
        name: 'ParentComponent',
        component: ParentComponent
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router