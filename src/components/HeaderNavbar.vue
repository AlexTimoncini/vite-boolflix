<script>
    export default{
        name: 'HeaderNavbar',
        data() {
            return {
                searchValue: '',
                looking: false,
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
                <li class="ivy_nav_item ivy_active">
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
            <button @click="looking = !looking"><i class="fa-solid fa-magnifying-glass"></i></button>
            <input class="ivy_searchbar" @keyup="$emit('lookingFilm', searchValue)" type="text" v-model="searchValue" placeholder="Search a movie.." :class="looking ? 'ivy_active' : ''">
        </div>
    </nav>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/mixin' as *;
    nav{
        @include flex(row, space-between, center, nowrap);
        padding: 1rem 2rem;
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
                margin-left: 2rem;

                .ivy_nav_item{
                    font-size: 1.5rem;
                    margin: 0 2rem;
                }

                .ivy_nav_item.ivy_active{
                    border-bottom: 3px solid #fff;
                    border-bottom-left-radius: 2px;
                    border-bottom-right-radius: 2px;
                }
            }

        }
        .ivy_search_box{
            position: relative;
            .ivy_searchbar{
            height: 50px;
            width: 50px;
            border: none;
            padding: 10px;
            font-size: 1.1rem;
            letter-spacing: 2px;
            outline: none;
            border-radius: 25px;
            transition: all .5s ease-in-out;
            background-color: #ff0000;
            padding-right: 40px;
            color:#ff0000;
            }
            .ivy_searchbar::placeholder{
            color:rgba(255,255,255,.5);
            font-size: 18px;
            letter-spacing: 2px;
            font-weight: 100;
            }
            button{
            width: 50px;
            height: 50px;
            border-style: none;
            font-size: 20px;
            font-weight: bold;
            outline: none;
            cursor: pointer;
            border-radius: 50%;
            position: absolute;
            right: 0px;
            color:#ffffff ;
            background-color:transparent;
            }
            .ivy_searchbar.ivy_active{
            width: 300px;
            border-radius: 0px;
            background-color: transparent;
            border-bottom:1px solid rgba(255,255,255,.5);
            transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
            }
            .ivy_searchbar:focus{
            width: 300px;
            border-radius: 0px;
            background-color: transparent;
            border-bottom:1px solid rgba(255,255,255,.5);
            transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
            }
        }
    }
</style>
