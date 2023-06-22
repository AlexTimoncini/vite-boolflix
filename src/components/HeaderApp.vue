<script>
    import HeaderNavbar from './HeaderNavbar.vue';
    import HeaderJumbo from './HeaderJumbo.vue';
    import axios from 'axios';
    import { store } from '../store.js'

    export default{
        name: 'HeaderApp',
        components: {
            HeaderNavbar,
            HeaderJumbo,
        },
        data() {
            return {
                store,
                newestFilm: {},
            }
        },
        methods: {
            filterFilm(filter){
                const generalUrl = 'https://api.themoviedb.org/3/search/movie?api_key=8f101200f70e7ca202e652f769e5695e'
                return `${generalUrl}&query=${filter}`
            },
            filterSeries(filter){
                const generalUrl = 'https://api.themoviedb.org/3/search/tv?api_key=8f101200f70e7ca202e652f769e5695e'
                return `${generalUrl}&query=${filter}`
            },
            displayResults(filmName){
                axios.get(this.filterFilm(filmName))
                .then( (response)=> {
                    store.filmList = response.data.results
                    console.log(store.filmList);
                })
                .catch( function(error){
                    console.log(error)
                });

                axios.get(this.filterSeries(filmName))
                .then( (response)=> {
                    store.seriesList = response.data.results
                    console.log(store.seriesList);
                })
                .catch( function(error){
                    console.log(error)
                });
            },
            getTrendFilms(){
                axios.get('https://api.themoviedb.org/3/movie/popular?api_key=8f101200f70e7ca202e652f769e5695e')
                .then( (response)=> {
                    this.newestFilm = response.data.results[0];
                    console.log(this.newestFilm)
                })
                .catch( function(error){
                    console.log(error)
                });
            }
        },
        created(){
            this.getTrendFilms()
        }

    }
</script>

<template>
    <header>
        <HeaderNavbar @lookingFilm="displayResults"/>
        <HeaderJumbo :newFilm="newestFilm"/>
    </header>
</template>

<style lang="scss" scoped>
    
</style>
