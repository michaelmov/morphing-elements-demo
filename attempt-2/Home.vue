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
                    <div v-for="article in articles" :key="article.id" class="col-12 col-xl-4">
                        <article ref="articleCard" class="card d-flex flex-row" v-on:click="startLeave(article.id)">
                                <div class="card__thumbnail" :style="{ backgroundImage: `url('${article.imageUrl}')` }"></div>
                                <div class="card__details d-flex flex-column flex-wrap justify-content-between">
                                    <h2 class="card__title">{{ article.title }}</h2>
                                    <h3 class="card__likes">{{ article.likes }} likes</h3>
                                </div>
                        </article>
                    </div>
                </div>
            </div>
        </main>
</template>
<script>
export default {
    name: 'Home',
    props: {
        articles: Array,
        ghostRouter: Object,
    },
    methods: {
        startLeave(id) {
            const sharedElement = event.target.querySelector('.card__thumbnail');
            const sharedElementClone = sharedElement.cloneNode(true);
            const sharedElementRect = sharedElement.getBoundingClientRect();
            sharedElementClone.className = 'card__thumbnail';
            this.ghostRouter.addSharedElement(sharedElementClone, sharedElementRect);
            this.$router.push({ name: 'Story', params: { id: id}})
        }
    }
}
</script>
<style lang="scss">
    @import './scss/main';
</style>
