<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Generos
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li v-for="gen in generos" :key="gen.idGenero"><router-link class="dropdown-item" :to="`/peliculas/Genero/${gen.idGenero}`">{{gen.nombre}}</router-link></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Nacionalidad
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li v-for="nac in nacionalidades" :key="nac.idNacionalidad"><router-link class="dropdown-item" :to="`/peliculas/Nacionalidad/${nac.idNacionalidad}`">{{nac.nombre}}</router-link></li>
                        </ul>
                    </li>
                </ul>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Titulo" aria-label="Search" v-model="nomPelicula" v-on:keyup="filtrarPelicula">
                <button class="btn btn-outline-success" v-on:click="filtrarPelicula" type="button">Buscar</button>
            </form>
            </div>
        </div>
    </nav>
</template>

<script>
import ServicesPeliculas from './../services/ServicesPeliculas';
const service = new ServicesPeliculas();

export default {
    name : "MenuComponent" ,
    data() {
        return{
            generos : [] ,
            nacionalidades : [] ,
            nomPelicula : "" ,
            titulos : [] ,
            peliculas : []
        }
    },
    mounted() {
        service.getGeneros().then( res => {
            this.generos = res;
        })

        service.getNacionalidades().then( res => {
            this.nacionalidades = res;
        })

        service.getPeliculas().then( res => {
            for( var i = 0; i < res.length; i++) {
                this.titulos = res[i].titulo.toLowerCase();
            }
        })
    },
    methods : {
        filtrarPelicula() {
            service.getPeliculas().then( res => {
                for( var i = 0; i < res.length; i++) {
                    this.titulos = res[i].titulo.toLowerCase();

                    if(this.titulos.toLowerCase() == `${this.nomPelicula.toLowerCase()}`) {
                        this.peliculas = res[i];
                        console.log(this.peliculas)
                    }
                }
            })
        },
    }
}
</script>

<style>

</style>