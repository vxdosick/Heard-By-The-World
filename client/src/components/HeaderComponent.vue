<template>
    <header class="header">
        <div class="header__container container">
            <a href="/" class="header__logo">
                <img src="images/logo.png" alt="logo">
                <p class="normal__text">HBTW</p>
            </a>
            <nav class="header__menu">
                <ul>
                    <li><a class="button__text" href="#functions__create">Create meetup</a></li>
                    <li><a class="button__text" href="#functions__join">Join meetup</a></li>
                    <li v-if="isAuthorised" class="header__user">
                        <ButtonAnother padding="10px">
                            <img src="images/user-icon.png" alt="user icon">
                            <p class="button__text">User Name</p>   
                        </ButtonAnother>
                    </li>
                    <li v-if="!isAuthorised" class="header__authmenu">
                        <ButtonGeneral @clickFunction="loginOpenModal" padding="10px">
                            Log in
                        </ButtonGeneral>
                        <ModalWindow v-if="loginSetOpen" @close="loginOpenModal">
                            login
                        </ModalWindow>
                        <ButtonAnother @clickFunction="signupOpenModal" padding="10px">
                            Sign up
                        </ButtonAnother>
                        <ModalWindow v-if="signupSetOpen" @close="signupOpenModal">
                            sign
                        </ModalWindow>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'
    import ButtonGeneral from '../components/ButtonGeneral.vue'
    import ButtonAnother from '../components/ButtonAnother.vue'
    import ModalWindow from '../components/ModalWindow.vue'

    export default defineComponent({
        name: 'HeaderComponent',
        components: {ButtonGeneral, ButtonAnother, ModalWindow},
        data() {
            return {
                loginSetOpen: false,
                signupSetOpen: false,
                isAuthorised: false 
            }
        },
        methods: {
            loginOpenModal() {
                this.loginSetOpen = !this.loginSetOpen
            },
            signupOpenModal() {
                this.signupSetOpen = !this.signupSetOpen
            }
        }
    })
</script>

<style scoped lang="scss">
    .header {
        padding: 30px 0px;
        margin-bottom: 100px;
        .header__container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .header__logo {
                display: flex;
                align-items: center;
                gap: 15px;
                img {
                    max-width: 70px;
                }
                p {
                    color: black;
                    font-weight: 600;
                }
            }
            .header__menu {
                ul {
                    display: flex;
                    align-items: center;
                    gap: 50px;
                    .header__user {
                        button {
                            display: flex;
                            align-items: center;
                            gap: 10px;
                            img {
                                max-width: 20px;
                            }
                        }
                    }
                    .header__authmenu {
                        display: flex;
                        gap: 20px;
                    }
                    li {
                        a {
                            color: black;
                        }
                    }
                }
            }
        }
    }
</style>