<template>
    <main>
        <div class="profile">
            <div class="container">
                <ProfileNav />
                <div class="profile-main">
                    <h2 class="profile__title">Профиль</h2>
                    <form @submit.prevent="" class="profile-main__wrapper">
                        <div class="profile-main__images">
                            <div class="profile-main__image">
                                <img src="https://picsum.photos/300/400" alt="img">
                            </div>
                            <div class="profile-main__thumb-images">
                                <div class="profile-main__thumb">
                                    <label for="thumb1">
                                        <camer />
                                        <img v-if="false" src="https://picsum.photos/100" alt="">
                                    </label>
                                    <input type="file" id="thumb1">
                                </div>
                                <div class="profile-main__thumb">
                                    <label for="thumb2">
                                        <camer />
                                        <img v-if="false" src="https://picsum.photos/100" alt="">
                                    </label>
                                    <input type="file" id="thumb2">
                                </div>
                                <div class="profile-main__thumb">
                                    <label for="thumb3">
                                        <camer />
                                        <img v-if="false" src="https://picsum.photos/100" alt="">
                                    </label>
                                    <input type="file" id="thumb3">
                                </div>
                            </div>
                        </div>
                        <div class="profile-main__form">
                            <div class="profile-main__form-wrapper">
                                <h4>Основная информация</h4>
                                <div class="input-wrapper">
                                    <label for="name">Имя</label>
                                    <div class="input-list">
                                        <input id="name" type="text" placeholder="Ваше имя">
                                    </div>
                                </div>
                                <div class="input-wrapper">
                                    <label for="date">Дата рождения</label>
                                    <div class="input-list">
                                        <input id="date" type="number" placeholder="День">
                                        <input type="number" placeholder="Месяц">
                                        <input type="number" placeholder="День">
                                    </div>
                                </div>
                            </div>
                            <div class="profile-main__form-wrapper">
                                <h4>Личная информация</h4>
                                <div class="input-wrapper">
                                    <label for="height">Рост</label>
                                    <div class="input-list">
                                        <select id="height">
                                            <option value="Предпочитаю не отвечать">Предпочитаю не отвечать</option>
                                            <option value="Предпочитаю не отвечать">lorem</option>
                                            <option value="Предпочитаю не отвечать">lorem</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="input-wrapper">
                                    <label for="height">Вес</label>
                                    <div class="input-list">
                                        <select id="height">
                                            <option value="Предпочитаю не отвечать">Предпочитаю не отвечать</option>
                                            <option value="Предпочитаю не отвечать">lorem</option>
                                            <option value="Предпочитаю не отвечать">lorem</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="input-wrapper">
                                    <label for="height">Цвет волос</label>
                                    <div class="input-list">
                                        <select id="height">
                                            <option value="Предпочитаю не отвечать">Предпочитаю не отвечать</option>
                                            <option value="Предпочитаю не отвечать">lorem</option>
                                            <option value="Предпочитаю не отвечать">lorem</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="input-wrapper">
                                    <label for="height">Цвет глаз</label>
                                    <div class="input-list">
                                        <select id="height">
                                            <option value="Предпочитаю не отвечать">Предпочитаю не отвечать</option>
                                            <option value="Предпочитаю не отвечать">lorem</option>
                                            <option value="Предпочитаю не отвечать">lorem</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="input-wrapper">
                                    <label for="height">Цель знакомства</label>
                                    <div class="input-list">
                                        <select id="height">
                                            <option value="Предпочитаю не отвечать">Предпочитаю не отвечать</option>
                                            <option value="Предпочитаю не отвечать">lorem</option>
                                            <option value="Предпочитаю не отвечать">lorem</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="input-wrapper textarea-wr">
                                    <label for="abbout">О себе</label>
                                    <div class="input-list">
                                        <textarea id="abbout" placeholder="Напишите о себе"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="profile-main__form-wrapper">
                                <h4>Аккаунт</h4>
                                <div class="input-wrapper">
                                    <label for="email">E-mail</label>
                                    <div class="input-list">
                                        <input id="email" type="email" placeholder="Введите e-mail">
                                    </div>
                                </div>
                                <div class="input-wrapper">
                                    <label for="password">Пароль</label>
                                    <div class="input-list">
                                        <input id="password" type="password" placeholder="Введите пароль">
                                    </div>
                                </div>
                            </div>
                            <button type="submit" class="profile-main__form-btn">Сохранить</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import Camer from "@/components/icons/Camer.vue";
import ProfileNav from "@/components/ProfileNav.vue"
</script>

<style lang="scss" scoped></style>