<template>
    <header>
        <div class="header-top">
            <div class="container">
                <h4 class="header-top__title">Знакомства по всему миру</h4>
            </div>
        </div>
        <div class="header-bottom">
            <div class="container">
                <router-link class="site-logo" to="/">
                    <img src="@/assets/images/svg/logo.svg" alt="">
                </router-link>
                <nav>
                    <ul>
                        <li>
                            <router-link to="/">Анкеты</router-link>
                        </li>
                        <li>
                            <span @click="store.overlay = true, store.chatModal = true">Сообщения</span>
                        </li>
                        <li>
                            <router-link to="/subscription">Подписка</router-link>
                        </li>
                    </ul>
                </nav>
                <div class="lang">
                    <div class="lang-header">
                        <span>Россия</span>
                        <DownArrowVue />
                    </div>
                    <ul class="lang-list" v-if="langSwitch">
                        <li><router-link to="#">Россия</router-link></li>
                        <li><router-link to="#">Россия</router-link></li>
                    </ul>
                </div>
                <ul class="header__settings">
                    <li>
                        <search-icon />
                    </li>
                    <li>
                        <bell-icon />
                    </li>
                </ul>
                <router-link to="/profile/" class="header__profile">
                    <img src="https://picsum.photos/50" alt="">
                    <span>Иван Иванов</span>
                </router-link>
            </div>
        </div>
    </header>
    <router-view />
    <footer>
        <div class="container">
            <ul class="footer__list">
                <li><router-link to="/">О нас</router-link></li>
                <li><router-link to="/">Поддержка</router-link></li>
                <li><router-link to="/">Советы</router-link></li>
                <li><router-link to="/">Контакты</router-link></li>
                <li><router-link to="/">Правила оплаты</router-link></li>
            </ul>
            <p class="footer__desc">Политика обработки персональных данных</p>
            <div class="lang">
                <div class="lang-header">
                    <span>RU</span>
                    <DownArrowVue />
                </div>
                <ul class="lang-list" v-if="langSwitch">
                    <li><router-link to="#">RU</router-link></li>
                    <li><router-link to="#">RU</router-link></li>
                </ul>
            </div>
            <p class="footer__desc">© Company {{ new Date().getFullYear() }}</p>
        </div>
    </footer>
</template>

<script setup>
import { ref } from 'vue';
import DownArrowVue from '@/components/icons/DownArrow.vue';
import BellIcon from '@/components/icons/BellIcon.vue';
import SearchIcon from '@/components/icons/SearchIcon.vue';
import { useStore } from '@/stores/store';
const store = useStore()
const langSwitch = ref(false)
</script>

<style lang="scss" scoped></style>