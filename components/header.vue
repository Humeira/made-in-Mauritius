<template>
    <div class="container-fluid">
        <div class="row">
            <div class="hero">
                <h1 class="hero__title">
                    Made in Mauritius
                </h1>
                <p class="hero__desc">
                    A list of cool open source projects developed on the beautiful island of Mauritius
                </p>
                <a class="btn btn-info btn-lg hero__btn">Add your projects</a>
            </div>
        </div>
    </div>
</template>

<style>
    .hero {
        background: #136a8a; /* fallback for old browsers */
        background: -webkit-linear-gradient(to left, #136a8a, #267871); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to left, #136a8a, #267871); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        min-height: 275px;
        padding: 0;
    }

    .hero__title {
        padding-top: 60px;
        margin: 0;
        font-size: 48px;
        font-weight: bold;
        text-align: center;
        color: #fafafa;
    }

    .hero__desc {
        padding: 10px;
        font-size: 24px;
        text-align: center;
        color: #fafafa
    }

    .hero__btn {
        border: 2px solid;
        background: transparent;
        max-width: 200px;
        display: block;
        margin: 0 auto;
        transition: 0.2s ease-in background;
    }

    .hero__btn:hover, .hero__btn:focus, .hero__btn:visited {
        background: #fff;
        border-color: #136a8a;
        color: #136a8a;
    }

    @media screen and (max-width: 640px) {
        .hero__title {
            padding-top: 50px;
            font-size: 36px;
        }

        .hero__desc {
            font-size: 22px;
        }
    }

</style>