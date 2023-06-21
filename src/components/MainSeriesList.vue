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
            }
        }
    }
</script>

<template>
    <ul>
        <li v-for="serie in store.seriesList">
            <ul>
                <li>
                    <img :src="getImagePath(`https://image.tmdb.org/t/p/w342${serie.backdrop_path}`)" :alt="serie.original_name + 'image'">
                </li>
                <li>
                    {{ serie.original_name }}
                </li>
                <li>
                    <img :src="isAvaibleLang(serie.original_language) ? getImagePath(`../assets/lang/${serie.original_language}.png`) : getImagePath(`../assets/lang/globe.png`)" 
                    :alt="serie.original_language + ' language'" >
                </li>
                <li>
                    {{ serie.vote_average }}
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
