import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from './components/HomeComponent.vue';
import PeliculasComponent from './components/PeliculasComponent.vue';
import DetallesPelicula from './components/DetallesPelicula.vue';

const routes = [
    {
        path : "/" , component : HomeComponent
    },
    {
        path : "/peliculas/:genNac/:id" , component : PeliculasComponent
    },
    {
        path : "/detalles/:genNac/:id" , component : DetallesPelicula
    }
]

const router = createRouter({
    history : createWebHistory() ,
    routes : routes
})

export default router;