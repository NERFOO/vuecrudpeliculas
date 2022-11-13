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
                        <router-link :to="`/update/`" class="btn btn-info">Modificar</router-link>
                        <button @click="eliminarPelicula(pel.idPelicula)" class="btn btn-danger">Eliminar</button>
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

import Swal from 'sweetalert2'

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

            service.getPeliculasGenNac(this.genNac, this.idGenNac).then( res => {
                this.peliculas = res;
            })
        },

        eliminarPelicula(id) {
            Swal.fire({
                    title: '¿Estás seguro?',
                    text: "No se podrán deshacer los cambios",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si, eliminar'
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            'Eliminado!',
                            'La película ha sido eliminada',
                            'success',
                            service.deletePelicula(id).then( () => {
                                this.$router.push(`/peliculas/`)
                            })
                        )
                    }
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