<template lang='pug'>
.loginPageWrapper
    ZoneSmartLogo
    form.loginPage(@submit.prevent='submit')
        h1.loginPage__header Вход
        input.loginPage__input(type='email', placeholder='E-mail или телефон' v-model='form.email')
        .loginPage__input
            input.loginPage__input_password(:type='password_visibility', placeholder='Пароль' v-model='form.password')
            .loginPage__eye-pic-wrapper(@click='changePasswordVisibility')
                PasswordEyeOpened(v-if='password_is_shown')
                PasswordEyeClosed(v-else)
        button.loginPage__btn(type='submit') Войти
    p.loginPage__copyright &#169; 2020 ООО «ЗОНСМАРТ». Все права защищены. 
</template>

<script>
import PasswordEyeOpened from './image-components/PasswordEyeOpened'
import PasswordEyeClosed from './image-components/PasswordEyeClosed'
import ZoneSmartLogo from './image-components/ZoneSmartLogo'
import { mapActions } from 'vuex'

export default {
    name: 'loginPage',
    components: {
        PasswordEyeOpened,
        ZoneSmartLogo,
        PasswordEyeClosed
    },
    data() {
        return {
            password_visibility: 'password',
            password_is_shown: false,
            form: {
                email: '',
                password: ''
            }

        }
    },
    methods: {
        ...mapActions({
            signIn: 'auth/signIn'
        }),
        changePasswordVisibility() {
            this.password_is_shown = !this.password_is_shown
            this.password_visibility = this.password_visibility === 'password' ? 'text' : 'password'
        },

        submit() {
            this.signIn(this.form)
        }
    }
}
</script>

<style>

input {
    border: 0;
    font-family: Roboto;
    font-weight: lighter;
    font-size: 14px;
    padding-left: 10px;
    outline: none;
}
.loginPageWrapper {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;
    box-sizing: border-box;
    user-select: none;
}
.loginPage {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 407px;
    height: 453px;
    padding-top: 30px;
    margin-top: 105px;
    box-shadow: 0px 14px 64px rgba(48, 56, 64, 0.16);
    background: #fff;
    border-radius: 6px;
}
.loginPage__header {
    font-family: Roboto;
    font-weight: bold;
    margin-bottom: 40px;
}
.loginPage__input {
    display: flex;
    align-items: center;
    width: 307px;
    height: 52px;
    border: 1px solid #C5C7CD;
    box-sizing: border-box;
    border-radius: 6px;
    margin-bottom: 30px;
}
.loginPage__input_password {
    width: 85%;
    outline: none;
}
.loginPage__eye-pic-wrapper {
    margin-top: 3px;
    cursor: pointer;
}
.loginPage__btn {
    width: 307px;
    height: 52px;
    margin-top: 30px;
    background: #3CC8AE;
    border-radius: 4px;
    font-family: Roboto;
    font-style: normal;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #FFFFFF;
    border: none;
    cursor: pointer;
    outline: none;
}
.loginPage__btn:hover {
    background: #1dad93;
}
.loginPage__copyright {
    font-family: Roboto;
    font-style: normal;
    font-size: 13px;
    letter-spacing: -0.1625px;
    color: #152739;
    opacity: 0.4;
    margin-top: 200px;
}
</style>