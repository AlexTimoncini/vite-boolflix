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
    <ul>
        <li v-for="serie in store.seriesList">
            <ul>
                <li>
                    <img :src="(serie.backdrop_path != null) 
                    ? getImagePath(`https://image.tmdb.org/t/p/w342${serie.backdrop_path}`) 
                    : getImagePath(`../assets/default_poster.jpg`)" 
                    :alt="serie.original_name + 'image'">                
                </li>
                <li>
                    {{ serie.original_name }}
                </li>
                <li>
                    <img :src="isAvaibleLang(serie.original_language) ? getImagePath(`../assets/lang/${serie.original_language}.png`) : getImagePath(`../assets/lang/globe.png`)" 
                    :alt="serie.original_language + ' language'" >
                </li>
                <li>
                    <span v-for="star in parseInt(handleVote(serie.vote_average))">
                        <i class="fa-solid fa-star"></i>
                    </span>
                    <span v-for="unstar in (5 - parseInt(handleVote(serie.vote_average)))">
                        <i class="fa-regular fa-star"></i>
                    </span>
                </li>
            </ul>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
    img {
        height: 50px;
    }
</style>
