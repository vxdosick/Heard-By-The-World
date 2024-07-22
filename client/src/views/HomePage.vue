<template>
    <div class="wrapper">
        <div class="hero">
            <HeaderComponent/>
            <div class="container">
                <h1 class="hero__title supertitle__text">Living like a creator? Or a consumer? Create your story</h1>
            </div>
        </div>
        <main class="main">
            <div class="container">
                <p class="main__subtitle normal__text">
                    Since ancient times, people have understood the importance of connections for survival. Cave    communities hunted together, shared food, and protected each other from dangers, realizing that only by working together could they overcome difficulties. In the modern world, despite all technological advancements, the need for strong and reliable connections remains undeniable. Whether it's professional contacts or close relationships, they are the key to success and well-being. Do you use your connections wisely?
                </p>
                <section class="functions">
                    <div class="functions__create" id="functions__create">
                        <h2 class="title__text functions__create--title">
                            Create your meeting
                        </h2>
                        <p class="small__text functions__create--subtitle">The main emphasis is on simplicity. After    filling out a small form, an appointment will be scheduled.</p>
                        <ButtonGeneral to="create-meeting" class="functions__mainbuttons">
                            Create +
                        </ButtonGeneral>
                    </div>
                    <div class="functions__join" id="functions__join">
                        <h2 class="title__text functions__join--title">
                            Join to meeting
                        </h2>
                        <p class="small__text functions__join--subtitle">Want to have a good time or learn something useful? Join a meeting in a few clicks.</p>
                        <ButtonAnother to="join-meeting" class="functions__mainbuttons">
                            Join &#8595;
                        </ButtonAnother>
                    </div>
                </section>
            </div>
        </main>
        <FooterComponent/>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'
    import HeaderComponent from '../components/HeaderComponent.vue'
    import FooterComponent from '../components/FooterComponent.vue'
    import ButtonAnother from '@/components/ButtonAnother.vue';
    import ButtonGeneral from '@/components/ButtonGeneral.vue';

    export default defineComponent({
        name: 'HomePage',
        components: { HeaderComponent, FooterComponent, ButtonGeneral, ButtonAnother},
        data() {
            return {

            }
        },
        methods: {

        }
    })
</script>

<style scoped lang="scss">
    .hero {
        height: 70vh;
        background-color: #7fffd4;
        border-bottom: 1px solid black;
        .hero__title {
            max-width: 1000px;
        }
    }
    .main {
        padding: 100px 0px;
        .main__subtitle {
            line-height: 150%;
            text-align: center;
            margin-bottom: 100px;
            border-bottom: 2px solid aquamarine;
            padding-bottom: 20px;
        }
        .functions {
            display: flex;
            align-items: start;
            justify-content: space-between;
            padding-bottom: 20px;
            border-bottom: 2px solid aquamarine;
            text-align: center;
            .functions__mainbuttons {
                display: inline-block;
            }
            h2 {
                margin-bottom: 30px;
            }
            p {
                margin-bottom: 50px;
                min-height: 155px;
                
            }
            .functions__create {
                max-width: 40%;
            }
            .functions__join {
                max-width: 40%;
            }
        }
    }
</style>