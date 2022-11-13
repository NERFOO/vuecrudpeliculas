<template>
    <div>
        <h1>Update component</h1>

        <form v-on:submit.prevent="updatePelicula()">
            <label>Selecciona una pelicula</label>
            <select class="form-select" v-model="idPelicula">
                <option v-for="pel in peliculas" :key="pel" :value="pel.idPelicula">{{pel.titulo}}</option>
            </select>

            <label>Selecciona un genero</label>
            <select class="form-select" v-model="idGenero">
                <option v-for="gen in generos" :key="gen" :value="gen.idGenero">{{gen.nombre}}</option>
            </select>
            <br/>
            <button class="btn btn-success">Realizar cambio</button>
        </form>
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
            idPelicula : 0 ,
            idGenero : 0
        }
    },
    mounted() {
        service.getPeliculas().then( res => {
            this.peliculas = res;
        });
        service.getGeneros().then( res => {
            this.generos = res;
        });
    },
    methods : {
        updatePelicula() {
            service.putPelicula(this.idPelicula, this.idGenero).then( () => {
                this.$router.push(`/peliculas/Genero/${this.idGenero}`);
            })
        }
    }

}
</script>

<style>

</style>