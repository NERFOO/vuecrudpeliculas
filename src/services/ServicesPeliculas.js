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
}