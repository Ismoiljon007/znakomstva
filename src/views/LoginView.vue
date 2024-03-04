<template>
    <main style="padding: 0;">
        <div class="login">
            <div class="container">
                <h2 class="login__title">Знакомства без преград</h2>
                <p class="login__desc">Для современного мира сплочённость команды профессионалов однозначно фиксирует
                    необходимость системы обучения кадров, соответствующей насущным потребностям.</p>
                <form @submit.prevent="">
                    <div class="login__input-wrapper">
                        <input type="email" placeholder="Введите электронную почту">
                        <MessageIconVue />
                    </div>
                    <div class="login__input-wrapper">
                        <input type="password" placeholder="Введите пароль">
                        <PasswordIconVue />
                    </div>
                    <button class="login__submit-btn">Войти</button>
                </form>
            </div>
            <img src="@/assets/images/png/left-png.png" class="login-left-rec" alt="">
            <img src="@/assets/images/png/right-png.png" class="login-right-rec" alt="">
        </div>
    </main>
</template>

<script setup>
import MessageIconVue from '@/components/icons/MessageIcon.vue';
import PasswordIconVue from '@/components/icons/PasswordIcon.vue';
</script>

<style lang="scss" scoped></style>