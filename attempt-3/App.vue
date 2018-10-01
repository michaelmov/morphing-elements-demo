<template>
    <router-view :articles="articles"></router-view>
</template>
<script>
import Overdrive from "vue-overdrive";
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "./Home";
import Story from "./Story";

Vue.use(Overdrive);
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { name: 'Home', path: '/', component: Home, props: true },
        { name: 'Story', path: '/story/:id', component: Story, props: true }
    ]
});

export default {
    name: 'App',
    components: {
        Overdrive
    },
    data() {
        return {
            articles: [
                {
                    id: 0,
                    title: 'Amazon’s new device preorders dominate this week’s best deals',
                    imageUrl: 'https://cdn.vox-cdn.com/thumbor/fZer7NY6JmPGktdOkk2t-tNH46g=/0x167:2000x1500/1310x873/cdn.vox-cdn.com/uploads/chorus_image/image/61497169/Echo_Show__Entertainment.0.jpg',
                    likes: '8k'
                },
                {
                    id: 1,
                    title: 'Microsoft puts its touch-friendly Office apps for Windows 10 on hold',
                    imageUrl: 'https://cdn.vox-cdn.com/thumbor/x9Ly-W2-Jy9jF6XhOiJw_j84V6k=/0x0:640x427/1310x873/cdn.vox-cdn.com/uploads/chorus_image/image/61579897/microsoftofficestock.0.jpg',
                    likes: '13k'
                },
                {
                    id: 2,
                    title: 'Google Maps in CarPlay isn’t the dream you’ve been waiting for',
                    imageUrl: 'https://cdn.vox-cdn.com/thumbor/TA4EgaTQnbjfoVTccRZavwcDNlg=/0x0:2040x1360/1310x873/cdn.vox-cdn.com/uploads/chorus_image/image/61578245/vpavic_180925_2980_0007.0.jpg',
                    likes: '7.2k'
                },
                {
                    id: 3,
                    title: 'The best email app for iOS and Android',
                    imageUrl: 'https://cdn.vox-cdn.com/thumbor/ln6N3hd4_XKJBHZFfOvpaFhSqOc=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/13172087/akrales_180927_2985_0010.jpg',
                    likes: '6.4k'
                },
                {
                    id: 4,
                    title: 'Oculus Quest put us in an ‘arena-scale’ Wild West shootout, and it was great',
                    imageUrl: 'https://cdn.vox-cdn.com/thumbor/6Al9_U9cJRe2Va5hN4j7ydubupA=/0x0:2040x1360/1310x873/cdn.vox-cdn.com/uploads/chorus_image/image/61563567/arobertson_180926_2983_0042.0.jpg',
                    likes: '22k'
                }
            ]
        }
    },
    router
}
</script>
<style lang="scss">
@import './scss/main';


</style>

