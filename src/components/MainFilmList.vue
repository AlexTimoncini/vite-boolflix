<script>
import { store } from '../store.js'
    export default{
        name: 'MainFilmList',
        data() {
            return {
                store,
            }
        },
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
                    {{ film.original_language }}
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
