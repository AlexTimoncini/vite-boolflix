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
                return 0
            }
        }
    }
</script>

<template>
    <ul class="ivy_film_grid">
        <li v-for="film in store.filmList">
            <ul>
                <li>
                    <img :src="(film.backdrop_path != null) 
                    ? getImagePath(`https://image.tmdb.org/t/p/w342${film.backdrop_path}`) 
                    : getImagePath(`../assets/default_poster.jpg`)" 
                    :alt="film.original_name + 'image'"
                    class="ivy_movie_cover">
                </li>
                <!-- <li>
                    {{ film.title }}
                </li>
                <li>
                    {{ film.original_title }}
                </li> -->
                <!-- <li>
                    <img :src="isAvaibleLang(film.original_language) ? getImagePath(`../assets/lang/${film.original_language}.png`) : getImagePath(`../assets/lang/globe.png`)" 
                    :alt="film.original_language + ' language'" >
                </li> -->
                <!-- <li>
                    <span v-for="star in parseInt(handleVote(film.vote_average))">
                        <i class="fa-solid fa-star"></i>
                    </span>
                    <span v-for="unstar in (5 - parseInt(handleVote(film.vote_average)))">
                        <i class="fa-regular fa-star"></i>
                    </span>
                </li> -->
            </ul>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixin' as *;
    .ivy_film_grid{
    @include flex(row, center, flex-start, wrap);
    width: 100vw;
    gap: 1rem;
        .ivy_movie_cover {
            height: 600px;
            width: 342px;
            object-fit: cover;
            object-position: center;
        }
    
        .fa-star{
            color: gold;
        }
    }
</style>
