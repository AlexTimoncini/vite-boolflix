<script>
    import HeaderNavbar from './HeaderNavbar.vue';
    import axios from 'axios';
    import { store } from '../store.js'

    export default{
        name: 'HeaderApp',
        components: {
            HeaderNavbar,
        },
        data() {
            return {
                store,
            }
        },
        methods: {
            filterFilm(filter){
                const generalUrl = 'https://api.themoviedb.org/3/search/movie?api_key=8f101200f70e7ca202e652f769e5695e'
                return `${generalUrl}&query=${filter}`
            },
            displayFilm(filmName){
                axios.get(this.filterFilm(filmName))
                .then( (response)=> {
                    store.filmList = response.data.results
                    console.log(store.filmList);
                })
                .catch( function(error){
                    console.log(error)
                });
            }
        }
    }
</script>

<template>
    <header>
        <HeaderNavbar @lookingFilm="displayFilm"/>
    </header>
</template>

<style lang="scss" scoped>
    
</style>
