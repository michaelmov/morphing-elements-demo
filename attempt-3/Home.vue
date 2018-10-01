<template>
            <main class="grid-view">
            <nav class="nav">
                <div class="container-fluid">
                    <ul class="nav__items"> 
                        <li class="nav__item"><a href="#">Business</a></li>
                        <li class="nav__item active"><a href="#">Tech</a></li>
                        <li class="nav__item"><a href="#">Politics</a></li>
                    </ul>
                </div>
            </nav>
            <div class="grid container-fluid">
                <h1 class="grid__title">Articles</h1>
                <div class="row grid__articles">
                    <div v-for="(article, index) in articles" :key="article.id" class="col-12 col-xl-4">
                        <router-link :to="`/story/${article.id}`" class="card-link">
                            <article class="card d-flex flex-row">
                                    <overdrive :id="`card-${index}`" :duration="300">
                                        <div class="card__thumbnail" :style="{ backgroundImage: `url('${article.imageUrl}')` }"></div>
                                    </overdrive>
                                    <div class="card__details d-flex flex-column flex-wrap justify-content-between">
                                        <overdrive :id="`card-title-${index}`" :duration="300">
                                            <h2 class="card__title">{{ article.title }}</h2>
                                        </overdrive>
                                        <h3 class="card__likes">{{ article.likes }} likes</h3>
                                    </div>
                            </article>
                        </router-link>
                    </div>
                </div>
            </div>
        </main>
</template>
<script>
export default {
    name: 'Home',
    props: {
        articles: Array
    }
}
</script>
<style lang="scss">
    @import './scss/main';
</style>
