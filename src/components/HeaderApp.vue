<script>
    import HeaderNavbar from './HeaderNavbar.vue';
    export default{
        name: 'HeaderApp',
        components: {
            HeaderNavbar,
        },
        methods: {
            displayFilm(filmName){
                console.log(filmName)
            }
        }
    }
</script>

<template>
    <header>
        <HeaderNavbar @lookingFilm="displayFilm"/>
    </header>
</template>

<style lang="scss" scoped>
    
</style>
