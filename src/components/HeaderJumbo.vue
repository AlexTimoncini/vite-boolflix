<script>
    export default{
        name: 'HeaderJumbo',
        data() {
            return {
                
            }
        },
        methods: {
            getImagePath: function(imgPath) {
                return new URL(imgPath, import.meta.url).href;
            },
        },
        props :{
            newFilm : Object,
        }
    }
</script>

<template>
    <section id="jumbotron">
        <img :src="getImagePath(`https://image.tmdb.org/t/p/w342${newFilm.backdrop_path}`)" :alt="newFilm.title" class="ivy_hero_img">
        <div class="ivy_film_info">
            <h1 class="ivy_title">{{ newFilm.title }}</h1>
            <p class="ivy_desc">{{ newFilm.overview }}</p>
            <button>Watch</button>
            <button>Download</button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    #jumbotron{
        height: 70vh;
        margin-bottom: 1rem;
        position: relative;
        .ivy_hero_img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.4;
            position: absolute;
        }

        .ivy_film_info{
            position: absolute;
            bottom: 50px;
            left: 100px;
            width: 30%;
            .ivy_title{
                text-transform: uppercase;
                font-size: 3rem;
            }

            button{
                padding: 0.8rem 1.4rem;
                border: 3px solid red;
                border-radius: 2rem;
                background: none;
                font-size: 1.1rem;
                font-weight: bold;
                color: red;
                margin: 1rem 1rem 0 0;
                cursor: pointer;
            }
        }
        
    }
</style>
