<template>
    <component :is="tag" v-bind="to ? { to } : {}" @click="clickFunction" :style="buttonStyle" class="button__general button__text">
        <slot></slot>
    </component>
</template>

<script lang="ts">
    import { computed, defineComponent, PropType } from 'vue'
import { RouterLink } from 'vue-router';

    export default defineComponent({
        name: 'ButtonGeneral',
        props: {
            padding: {
                type: String as PropType<string>,
                required: false,
                default: '10px 50px'
            },
            to: {
                type: String as PropType<string>,
                required: false,
                default: null
            }
        },
        setup(props) {
            const buttonStyle = computed(() => ({
                padding: props.padding
            }))
            const tag = computed(() => (props.to ? RouterLink : 'button'))
            return {buttonStyle, tag}
        },
        methods: {
            clickFunction() {
                this.$emit('clickFunction')
            }
        }
    })

</script>

<style scoped lang="scss">
    .button__general {
        background-color: black;
        color: white;
        border-radius: 10px;
        // padding: 10px 50px;
        transition: all 0.5s ease;
        line-height: 100%;
        &:hover {
            // -webkit-box-shadow: inset 0px -100px 67px -57px rgba(127, 255, 212, 1);
            // -moz-box-shadow: inset 0px -100px 67px -57px rgba(127, 255, 212, 1);
            // box-shadow: inset 0px -100px 67px -57px rgba(127, 255, 212, 1);
            // color: black;
            // background-color: white
            background-color: rgb(59, 59, 59);
            transform: scale(1.07);
        }
    }
</style>