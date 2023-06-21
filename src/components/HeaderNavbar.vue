<script>
    export default{
        name: 'HeaderNavbar',
        data() {
            return {
                searchValue: '',
            }
        },
    }
</script>

<template>
    <nav>
        <div class="ivy_container">
            <div class="ivy_logo_box">
                <img src="../assets/boolflix_logo.png" alt="">
            </div>
            <ul class="ivy_nav_menu">
                <li class="ivy_nav_item">
                    <a href="#">Home</a>
                </li>
                <li class="ivy_nav_item">
                    <a href="#">Series</a>
                </li>
                <li class="ivy_nav_item">
                    <a href="#">Movies</a>
                </li>
                <li class="ivy_nav_item">
                    <a href="#">Recently Added</a>
                </li>
                <li class="ivy_nav_item">
                    <a href="#">My List</a>
                </li>
            </ul>
        </div>


        <div class="ivy_search_box">
            <input type="text" v-model="searchValue">
            <button @click="$emit('lookingFilm', searchValue)">GO</button>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixin' as *;
    nav{
        padding: 1rem 2rem;
        @include flex(row, space-between, center, nowrap);

        .ivy_container{
            display: flex;
            .ivy_logo_box{
                height: 70px;
        
                img{
                    height: 100%;
                    display: block;
                }
            }
    
            .ivy_nav_menu{
                @include flex;

                .ivy_nav_item{
                    font-size: 1.5rem;
                    padding: 0 2rem;
                }
            }
        }
    }
</style>
