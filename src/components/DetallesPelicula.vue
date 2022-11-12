<template>
    <div>
        <div v-if="!pelicula">
            <img src="./../assets/images/loading.gif" alt="cargando" style="width:100%">
        </div>
        <div class="card" style="width: 18rem;" v-else>
            <img :src="pelicula.foto" class="card-img-top" alt="foto" style="width:70%; height: 250px;">
            <div class="card-body">
                <h5 class="card-title">{{pelicula.titulo}}</h5>
                <p class="card-text">{{pelicula.argumento}}</p>
                <a :href="pelicula.enlaceVideo" target="_blank" class="btn btn-primary">YouTube</a>
                <router-link :to="`/peliculas/${genNac}/${pelicula.idGenero}`" class="btn btn-success">Volver</router-link>
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
            pelicula : null ,
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