<template>
    <main :class="[{'article-view--visible': transitionComplete}, `article-view`]">
        <header ref="articleHero" class="article__hero d-flex justify-content-center align-items-center"  :style="{ backgroundImage: `url('${article[0].imageUrl}')` }">
            <h1 class="article__title">{{ article[0].title }}</h1>
        </header>
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
        articles: Array,
        ghostRouter: Object,
    },
    data() {
        return {
            article: {},
            prevUrl: null,
            transitionComplete: false,
        }
    },
    beforeMount() {
        this.article = this.$props.articles.filter(article => {
            return article.id == this.$route.params.id;
        });

        this.prevUrl = this.$props.ghostRouter ? this.$props.ghostRouter.getPrevUrl() : null;        
    },
    mounted() {
        window.scrollTo(0,0);
        if(this.prevUrl) {
            this.$props.ghostRouter
			.runAnimation(this.$refs.articleHero.getBoundingClientRect())
			.then(() => {
                this.transitionComplete = true;
            })
			.catch(() => {return});
        }
        else {
            this.transitionComplete = true;
        }
    },
    beforeDestroy() {
        if(this.$route.name === 'Home') {
            this.goToHome();
        }
    },
    methods: {
        goToHome() {
            const sharedElement = this.$refs.articleHero;
            const sharedElementClone = sharedElement.cloneNode();
            const sharedElementRect = sharedElementClone.getBoundingClientRect();
            this.ghostRouter.addSharedElement(sharedElement, sharedElementRect);
        }
    }
}
</script>
<style lang="scss">
    @import './scss/main';

    .article {
    &-view {
        opacity: 0;
        &--visible {
            opacity: 1;

            .article__title {
                opacity: 1;
                transition: all 0.5s ease-in-out;
            }
        }
    }

    &__hero {
        height: 50vh;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        transition: all 0.5s ease-in-out;
    }

    &__title {
        color: #000000;
        background-color: #ffffff;
        padding: 30px;
        font-size: 30px;
        max-width: 800px;
        opacity: 0;


        @media(max-width: 600px) {
            max-width: 300px;
            font-size: 20px;
        }
    }

    &__content {
        margin-top: 50px;
        &-container {
            max-width: 1000px;
            padding: 0 50px;
        }

        p {
            line-height: 35px;
            margin-bottom: 40px;
        }
    }
}

</style>
