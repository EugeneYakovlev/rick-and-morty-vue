import Vue from 'vue'
import VueRouter from 'vue-router'
import RickAndMortyList from "../views/RickAndMortyList";
import RickAndMortyCharacter from "../views/RickAndMortyCharacter";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'RickAndMortyList',
        component: RickAndMortyList
    },
    {
        path: '/character/:id',
        name: 'CharacterDetails',
        component: RickAndMortyCharacter
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
