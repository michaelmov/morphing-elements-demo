<template>
    <main class="article-view">
        <overdrive :id="`card-${article[0].id}`" :duration="300">
            <header class="article__hero d-flex justify-content-center align-items-center"  :style="{ backgroundImage: `url('${article[0].imageUrl}')` }">
                <overdrive :id="`card-title-${article[0].id}`" :duration="300">
                    <h1 class="article__title">{{ article[0].title }}</h1>
                </overdrive>
            </header>
        </overdrive>
        <article class="article__content d-flex justify-content-center">
            <div class="article__content-container">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam ipsam earum eligendi laudantium quidem doloribus libero rem cum necessitatibus vitae ratione, ipsum fuga fugiat quisquam dolor molestias fugit at. Quasi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam ipsam earum eligendi laudantium quidem doloribus libero rem cum necessitatibus vitae ratione, ipsum fuga fugiat quisquam dolor molestias fugit at. Quasi!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam ipsam earum eligendi laudantium quidem doloribus libero rem cum necessitatibus vitae ratione, ipsum fuga fugiat quisquam dolor molestias fugit at. Quasi!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam ipsam earum eligendi laudantium quidem doloribus libero rem cum necessitatibus vitae ratione, ipsum fuga fugiat quisquam dolor molestias fugit at. Quasi!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam ipsam earum eligendi laudantium quidem doloribus libero rem cum necessitatibus vitae ratione, ipsum fuga fugiat quisquam dolor molestias fugit at. Quasi!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam ipsam earum eligendi laudantium quidem doloribus libero rem cum necessitatibus vitae ratione, ipsum fuga fugiat quisquam dolor molestias fugit at. Quasi!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam ipsam earum eligendi laudantium quidem doloribus libero rem cum necessitatibus vitae ratione, ipsum fuga fugiat quisquam dolor molestias fugit at. Quasi!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam ipsam earum eligendi laudantium quidem doloribus libero rem cum necessitatibus vitae ratione, ipsum fuga fugiat quisquam dolor molestias fugit at. Quasi!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam ipsam earum eligendi laudantium quidem doloribus libero rem cum necessitatibus vitae ratione, ipsum fuga fugiat quisquam dolor molestias fugit at. Quasi!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam ipsam earum eligendi laudantium quidem doloribus libero rem cum necessitatibus vitae ratione, ipsum fuga fugiat quisquam dolor molestias fugit at. Quasi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam ipsam earum eligendi laudantium quidem doloribus libero rem cum necessitatibus vitae ratione, ipsum fuga fugiat quisquam dolor molestias fugit at. Quasi!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam ipsam earum eligendi laudantium quidem doloribus libero rem cum necessitatibus vitae ratione, ipsum fuga fugiat quisquam dolor molestias fugit at. Quasi!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam ipsam earum eligendi laudantium quidem doloribus libero rem cum necessitatibus vitae ratione, ipsum fuga fugiat quisquam dolor molestias fugit at. Quasi!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam ipsam earum eligendi laudantium quidem doloribus libero rem cum necessitatibus vitae ratione, ipsum fuga fugiat quisquam dolor molestias fugit at. Quasi!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam ipsam earum eligendi laudantium quidem doloribus libero rem cum necessitatibus vitae ratione, ipsum fuga fugiat quisquam dolor molestias fugit at. Quasi!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam ipsam earum eligendi laudantium quidem doloribus libero rem cum necessitatibus vitae ratione, ipsum fuga fugiat quisquam dolor molestias fugit at. Quasi!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam ipsam earum eligendi laudantium quidem doloribus libero rem cum necessitatibus vitae ratione, ipsum fuga fugiat quisquam dolor molestias fugit at. Quasi!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam ipsam earum eligendi laudantium quidem doloribus libero rem cum necessitatibus vitae ratione, ipsum fuga fugiat quisquam dolor molestias fugit at. Quasi!</p>
            </div>
        </article>
    </main>
</template>
<script>
export default {
    name: 'Story',
    props: {
        articles: Array
    },
    data() {
        return {
            article: {}
        }
    },
    beforeMount() {
        this.article = this.$props.articles.filter(article => {
            return article.id == this.$route.params.id;
        })
    },
    mounted() {
        window.scrollTo(0,0);
    }
}
</script>
<style lang="scss">
    @import './scss/main';
</style>
