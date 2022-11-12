<template>
    <div>
        <div class="card" style="width: 18rem;">
            <img :src="this.pelicula.foto" class="card-img-top" alt="foto" style="width:70%; height: 250px;">
            <div class="card-body">
                <h5 class="card-title">{{this.pelicula.titulo}}</h5>
                <p class="card-text">{{this.pelicula.argumento}}</p>
                <a :href="this.pelicula.enlaceVideo" target="_blank" class="btn btn-primary">YouTube</a>
                <router-link :to="`/peliculas/${this.genNac}/${this.pelicula.idGenero}`" class="btn btn-success">Volver</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import ServicesPeliculas from './../services/ServicesPeliculas';
const service = new ServicesPeliculas();

export default {
    name : "DetallesPelicula" ,
    data() {
        return{
            pelicula : {} ,
            id : 0 ,
            genNac : ""
        }
    },
    mounted() {
        this.id = this.$route.params.id;
        this.genNac = this.$route.params.genNac;

        service.getPelicula(this.id).then( res => {
            this.pelicula = res;
        })
    }
}
</script>

<style>

</style>