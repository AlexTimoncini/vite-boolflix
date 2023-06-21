<script>
import { store } from '../store.js'
    export default{
        name: 'MainFilmList',
        data() {
            return {
                store,
            }
        },
        methods : {
            getImagePath: function(imgPath) {
                return new URL(imgPath, import.meta.url).href;
            },
            isAvaibleLang(lang){
                if(store.langAvaible.includes(lang)){
                    return true
                }
                return false
            },
            handleVote(vote){
                if(vote > 0){
                    return (vote / 2).toFixed()
                }
                return 'N.C.'
            }
        }
    }
</script>

<template>
    <ul>
        <li v-for="film in store.filmList">
            <ul>
                <li>
                    <img :src="(film.backdrop_path != null) 
                    ? getImagePath(`https://image.tmdb.org/t/p/w342${film.backdrop_path}`) 
                    : getImagePath(`https://image.tmdb.org/t/p/w342${film.backdrop_path}`)" 
                    :alt="film.original_name + 'image'">
                </li>
                <li>
                    {{ film.title }}
                </li>
                <li>
                    {{ film.original_title }}
                </li>
                <li>
                    <img :src="isAvaibleLang(film.original_language) ? getImagePath(`../assets/lang/${film.original_language}.png`) : getImagePath(`../assets/lang/globe.png`)" 
                    :alt="film.original_language + ' language'" >
                </li>
                <li>
                    {{ handleVote(film.vote_average) }}
                </li>
            </ul>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
    ul{
        margin-bottom: 3rem;
        background-color: azure;
    }
    img {
        height: 50px;
    }
</style>
