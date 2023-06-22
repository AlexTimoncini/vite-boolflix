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
                return 0;
            }
        }
    }
</script>

<template>
    <h1 class="ivy_section_title">Series</h1>
    <ul class="ivy_serie_grid">
        <li v-for="serie in store.seriesList">
            <div class="ivy_serie_cover">
                <img :src="(serie.backdrop_path != null) 
                    ? getImagePath(`https://image.tmdb.org/t/p/w342${serie.backdrop_path}`) 
                    : getImagePath(`../assets/default_poster.jpg`)" 
                    :alt="serie.original_name + 'image'">  
                <div class="ivy_serie_info">
                    <h1 class="ivy_serie_title">
                        {{ serie.original_name }}
                    </h1>
                    <img :src="isAvaibleLang(serie.original_language) ? getImagePath(`../assets/lang/${serie.original_language}.png`) : getImagePath(`../assets/lang/globe.png`)" 
                    :alt="serie.original_language + ' language'" 
                    class="ivy_serie_lang"
                    :class="isAvaibleLang(serie.original_language) ? '' : 'ivy_filter_white'">
                    <p class="ivy_serie_desc">
                        {{ serie.overview }}
                    </p>
                    <div class="ivy_serie_stars">
                        <span v-for="star in parseInt(handleVote(serie.vote_average))">
                            <i class="fa-solid fa-star"></i>
                        </span>
                        <span v-for="unstar in (5 - parseInt(handleVote(serie.vote_average)))">
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
    .ivy_serie_grid{
    @include flex(row, center, flex-start, wrap);
    width: 100vw;
    gap: 1rem;
        .ivy_serie_cover {
            height: 600px;
            width: 342px;
            position: relative;
            cursor: pointer;
            
            img{
                display: block;
                height: 100%;
                width: 100%;
                object-fit: cover;
                object-position: center;
            }
            .ivy_serie_info{
                position: absolute;
                top: 0;
                opacity: 0;
                background-color: rgba(0, 0, 0, 0.7);
                transition: all 0.33s ease;
                height: 100%;
                width: 100%;
                padding: 2rem 1rem;

                .ivy_serie_title{
                    color: red;
                    font-size: 1.3rem;
                    text-align: center;
                }

                .ivy_serie_lang{
                    display: block;
                    height: 20px;
                    object-fit: contain;
                    margin: 1rem 0;
                }

                .ivy_serie_desc{
                    height: 400px;
                    overflow: hidden;
                }

                .ivy_serie_stars{
                    position: absolute;
                    bottom: 20px;
                    left: 50%;
                    transform: translateX(-50%);

                }
            }

            &:hover .ivy_serie_info{
                opacity: 1;
            }
        }
    }
</style>
