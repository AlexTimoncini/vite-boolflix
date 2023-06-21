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
            }
        }
    }
</script>

<template>
    <ul>
        <li v-for="film in store.filmList">
            <ul>
                <li>
                    {{ film.title }}
                </li>
                <li>
                    {{ film.original_title }}
                </li>
                <li>
                    <img :src="getImagePath(`../assets/lang/${film.original_language}.png`)" alt="not working">
                </li>
                <li>
                    {{ film.vote_average }}
                </li>
            </ul>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
    
</style>
