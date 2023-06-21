<script>
    import HeaderNavbar from './HeaderNavbar.vue';
    import axios from 'axios';
    export default{
        name: 'HeaderApp',
        components: {
            HeaderNavbar,
        },
        methods: {
            displayFilm(filmName){
                axios.get('https://api.themoviedb.org/3/search/movie?api_key=8f101200f70e7ca202e652f769e5695e&query=mission')
                .then( (response)=> {
                    console.log(response.data.results)
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
