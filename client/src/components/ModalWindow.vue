<template>
    <div class="modal__window">
        <div class="modal__container">
            <ButtonAnother padding="5px 7px" @clickFunction="closeFunction" class="modal__close">
                &#215;
            </ButtonAnother>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import {defineComponent} from 'vue'
    import ButtonAnother from './ButtonAnother.vue';

    export default defineComponent({
        name: 'ModalWindow',
        components: {ButtonAnother},
        data() {
            return {

            }
        },
        methods: {
            closeFunction() {
                this.$emit('close')
            }
        }
    })
</script>

<style lang="scss" scoped>
    .modal__window {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(61, 61, 61, 0.685);
        .modal__container {
            position: absolute;
            background-color: white;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
            padding: 40px;
            border-radius: 10px;
            border: 1px solid black;
            min-width: 300px;
            min-height: 200px;
            .modal__close {
                position: absolute;
                top: 10px;
                right: 10px;
            }
        }
    }
</style>