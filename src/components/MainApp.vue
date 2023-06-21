<script>
import MainFilmList from './MainFilmList.vue';
import MainSeriesList from './MainSeriesList.vue';
    export default{
        name: 'MainApp',
        components: {
            MainFilmList,
            MainSeriesList
        }
    }
</script>

<template>
    <MainFilmList />
    <MainSeriesList />
</template>

<style lang="scss" scoped>
    
</style>
