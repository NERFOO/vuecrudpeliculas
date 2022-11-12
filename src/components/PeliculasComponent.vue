<template>
    <div>
        <h1>Peliculas</h1>

        <div v-if="!peliculas">
            <img src="./../assets/images/loading.gif" alt="cargando" style="width:100%">
        </div>
        <div v-else>
            <table class="table table-striped">
            <thead>
                <tr>
                    <th>NOMBRE</th>
                    <th>IMAGEN</th>
                    <th>OPCIONES</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="pel in peliculas" :key="pel.idPelicula">
                    <td>{{pel.titulo}}</td>
                    <td><img :src="pel.foto" alt="imagen" style="width:100px"></td>
                    <td>
                        <router-link :to="`/detalles/${this.genNac}/${pel.idPelicula}`" class="btn btn-success">Detalles</router-link>
                        <router-link to="#" class="btn btn-info">Modificar</router-link>
                        <router-link to="#" class="btn btn-danger">Eliminar</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
</template>

<script>
import ServicesPeliculas from './../services/ServicesPeliculas';
const service = new ServicesPeliculas();

export default {
    name : "PeliculasComponent" ,
    data() {
        return{
            peliculas : null ,
            genNac : "" ,
            idGenNac : 0
        }
    },
    methods : {
        cargarPeliculas() {
            this.idGenNac = this.$route.params.id;

            service.getPeliculas(this.genNac, this.idGenNac).then( res => {
                this.peliculas = res;
            })
        }
    },
    mounted() {
        this.genNac = this.$route.params.genNac;
        this.idGenNac = this.$route.params.id;

        this.cargarPeliculas();
    },
    watch : {
        '$route.params.id'(nextVal, oldVal) {
            if(nextVal != oldVal) {
                this.cargarPeliculas();
            }
        }
    }
}
</script>

<style>

</style>