<template>

    <footer class="footer">
        <div class="container-fluid text-center">
            <p class="text-muted">Copyright © {{ date }} <a :href="'http://github.com/Humeira'">Humeira Diljore</a>. </p>
        </div>
    </footer>
</template>

<script>
    export default{
        data () {
            return {
                date : new Date().getFullYear()
            }
        }
    }
</script>
<style lang="css" scoped>
    .footer {
        position: absolute;
        width: 100%;
        /* Set the fixed height of the footer here */
        height: 60px;
        background: #e2e2e2;
    }
    .text-muted {
        padding: 20px 20px 0;
    }
    .text-muted a {
        color : #136a8a;
    }
</style>