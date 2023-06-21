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
        <h1>Logo</h1>
        <div class="ivy_search_box">
            <input type="text" v-model="searchValue">
            <button @click="$emit('lookingFilm', searchValue)">GO</button>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
    
</style>
