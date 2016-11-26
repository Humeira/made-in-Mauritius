<template>
    <div class="main">
        <hero-header></hero-header>
    </div>
</template>

<script>
    import  heroHeader from '../components/header.vue';

    export default {
        name: 'app',
        components: {
            heroHeader
        },
        data () {
            return {}
        }
    }
</script>

<style>
    body{
        margin: 0;
        padding: 0;
    }
    .main {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>