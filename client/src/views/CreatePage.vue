<template>
    <div class="wrapper">
        <HeaderComponent/>
        <main>
            <h1>Create Page</h1>
        </main>
        <FooterComponent/>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'
    import HeaderComponent from '../components/HeaderComponent.vue'
    import FooterComponent from '../components/FooterComponent.vue'

    export default defineComponent({
        name: 'CreatePage',
        components: {HeaderComponent, FooterComponent},
        data() {
            return {

            }
        },
        methods: {

        }
    })
</script>

<style>

</style>