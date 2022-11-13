import Global from "@/Global";
import axios from "axios";

export default class ServicesPeliculas {
    getGeneros() {
        return new Promise(function (resolve) {
            var request = "/api/Generos/";
            var url = Global.urlPeliculas + request;

            axios.get(url).then( res => {
                resolve(res.data);
            })
        })
    }

    getPeliculas() {
        return new Promise(function (resolve) {
            var request = "/api/Peliculas/";
            var url = Global.urlPeliculas + request;

            axios.get(url).then( res => {
                resolve(res.data);
            })
        })
    }

    getNacionalidades() {
        return new Promise(function (resolve) {
            var request = "/api/Nacionalidades/";
            var url = Global.urlPeliculas + request;

            axios.get(url).then( res => {
                resolve(res.data);
            })
        })
    }

    getPeliculasGenNac(genNac, id) {
        return new Promise(function (resolve) {
            var request = `/api/peliculas/peliculas${genNac}/${id}`;
            var url = Global.urlPeliculas + request;

            axios.get(url).then( res => {
                resolve(res.data);
            })
        })
    }

    getPelicula(id) {
        return new Promise(function (resolve) {
            var request = "/api/peliculas/" + id;
            var url = Global.urlPeliculas + request;

            axios.get(url).then( res => {
                resolve(res.data);
            })
        })
    }

    putPelicula(idPeli, idGen) {
        return new Promise(function (resolve) {
            var request = `/api/peliculas/UpdatePeliculaGenero/${idPeli}/${idGen}`;
            var url = Global.urlPeliculas + request;

            axios.put(url).then( res => {
                resolve(res);
            })
        })
    }

    deletePelicula(id) {
        return new Promise(function (resolve) {
            var request = "/api/peliculas/" + id;
            var url = Global.urlPeliculas + request;

            axios.delete(url).then( res => {
                resolve(res);
            })
        })
    }

    filtroPelicula(titulo) {
        return new Promise(function (resolve) {
            var request = `/api/peliculas/PeliculasTitulo/${titulo}/`;
            var url = Global.urlPeliculas + request;

            axios.put(url).then( res => {
                resolve(res);
            })
        })
    }
}