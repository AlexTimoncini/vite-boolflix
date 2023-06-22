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
    <h1 class="ivy_section_title">Movies</h1>
    <ul class="ivy_film_grid">
        <li v-for="film in store.filmList">
            <div class="ivy_movie_cover">
                <img :src="(film.backdrop_path != null) 
                    ? getImagePath(`https://image.tmdb.org/t/p/w342${film.backdrop_path}`) 
                    : getImagePath(`../assets/default_poster.jpg`)" 
                    :alt="film.original_name + 'image'">
                <div class="ivy_movie_info">
                    <h2 class="ivy_movie_title">
                        {{ film.title }}
                    </h2>
                    <img :src="isAvaibleLang(film.original_language) ? getImagePath(`../assets/lang/${film.original_language}.png`) : getImagePath(`../assets/lang/globe.png`)" 
                    :alt="film.original_language + ' language'" 
                    class="ivy_movie_lang" 
                    :class="isAvaibleLang(film.original_language) ? '' : 'ivy_filter_white'">
                    <p class="ivy_movie_desc">
                        {{ film.overview }}
                    </p>
                    <div class="ivy_movie_stars">
                        <span v-for="star in parseInt(handleVote(film.vote_average))">
                            <i class="fa-solid fa-star"></i>
                        </span>
                        <span v-for="unstar in (5 - parseInt(handleVote(film.vote_average)))">
                            <i class="fa-regular fa-star"></i>
                        </span>
                    </div>
                </div>
            </div>
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
            position: relative;
            cursor: pointer;

            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center;
            }

            .ivy_movie_info{
                position: absolute;
                top: 0;
                opacity: 0;
                background-color: rgba(0, 0, 0, 0.7);
                transition: all 0.33s ease;
                height: 100%;
                width: 100%;
                padding: 2rem 1rem;

                .ivy_movie_title{
                    color: red;
                    font-size: 1.3rem;
                    text-align: center;
                }

                .ivy_movie_lang{
                    display: block;
                    height: 20px;
                    object-fit: contain;
                    margin: 1rem 0;
                }

                .ivy_movie_desc{
                    height: 400px;
                    overflow: hidden;
                }

                .ivy_movie_stars{
                    position: absolute;
                    bottom: 20px;
                    left: 50%;
                    transform: translateX(-50%);
                }
            }

            &:hover .ivy_movie_info{
                opacity: 1;
            }
        }
    }
</style>
