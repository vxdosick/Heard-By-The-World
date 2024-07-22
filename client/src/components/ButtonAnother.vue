<template>
    <component :is="tag" v-bind="to ? { to } : {}" @click="clickFunction" :style="buttonStyle" class="button__another button__text">
        <slot></slot>
    </component>
</template>

<script lang="ts">
    import { defineComponent, PropType, computed } from 'vue'
import { RouterLink } from 'vue-router';

    export default defineComponent({
        name: 'ButtonAnother',
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
            const buttonStyle = computed(()=>({
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
    .button__another {
        background-color: white;
        color: black;
        border-radius: 10px;
        border: 1px solid black;
        transition: all 0.5s ease;
        line-height: 100%;
        &:hover {
            background-color: rgb(230, 230, 230);
            transform: scale(1.07);
        }
    }
</style>