<template>
    <div>
        <h1>Update component</h1>

        <label>Selecciona una pelicula</label>
        <select class="form-select" v-model="pelicula">
            <option v-for="pel in peliculas" :key="pel" :value="pel.nombre">{{pel.titulo}}</option>
        </select>

        <label>Selecciona un genero</label>
        <select class="form-select">
            <option v-for="gen in generos" :key="gen">{{gen.nombre}}</option>
        </select>
    </div>
</template>

<script>
import ServicesPeliculas from './../services/ServicesPeliculas';
const service = new ServicesPeliculas();

export default {
    name : "UpdateComponent" ,
    data() {
        return{
            peliculas : [] ,
            generos : [] ,
            pelicula : "" ,
            genero : ""
        }
    },
    mounted() {
        service.getPeliculas().then( res => {
            this.peliculas = res;
        });
        service.getGeneros().then( res => {
            this.generos = res;
        });
    }

}
</script>

<style>

</style>