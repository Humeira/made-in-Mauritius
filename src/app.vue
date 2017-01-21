<template>
    <div>
        <hero-header></hero-header>
        <loop></loop>
    </div>

</template>

<script>
    import  heroHeader from '../components/header.vue';
    import  loop from '../components/loop.vue';

    export default {
        name: 'app',
        components: {
            heroHeader,
            loop
        },
        data () {
            return {}
        }
    }
</script>

<style>
    body {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>