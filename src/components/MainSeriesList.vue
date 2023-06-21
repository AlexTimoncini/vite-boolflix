<script>
import { store } from '../store.js'
    export default{
        name: 'MainSeriesList',
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
    <ul class="ivy_serie_grid">
        <li v-for="serie in store.seriesList">
            <ul>
                <li>
                    <img :src="(serie.backdrop_path != null) 
                    ? getImagePath(`https://image.tmdb.org/t/p/w342${serie.backdrop_path}`) 
                    : getImagePath(`../assets/default_poster.jpg`)" 
                    :alt="serie.original_name + 'image'"
                    class="ivy_serie_cover">                
                </li>
                <!-- <li>
                    {{ serie.original_name }}
                </li> -->
                <!-- <li>
                    <img :src="isAvaibleLang(serie.original_language) ? getImagePath(`../assets/lang/${serie.original_language}.png`) : getImagePath(`../assets/lang/globe.png`)" 
                    :alt="serie.original_language + ' language'" >
                </li> -->
                <!-- <li>
                    <span v-for="star in parseInt(handleVote(serie.vote_average))">
                        <i class="fa-solid fa-star"></i>
                    </span>
                    <span v-for="unstar in (5 - parseInt(handleVote(serie.vote_average)))">
                        <i class="fa-regular fa-star"></i>
                    </span>
                </li> -->
            </ul>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixin' as *;
    .ivy_serie_grid{
    @include flex(row, center, flex-start, wrap);
    width: 100vw;
    gap: 1rem;
        .ivy_serie_cover {
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
