<template>
    <main style="padding: 0;">
        <div class="error">
            <h1 class="error-title">404</h1>
            <p class="error-desc">Вы заблудились. Но не беспокойтесь: вот правильный путь</p>
            <router-link class="error-btn" to="/"> <navigation-arr /> <span>Вернуться назад</span></router-link>
            <img class="error-bg" src="@/assets/images/png/error.png" alt="">
        </div>
    </main>
</template>

<script setup>
import NavigationArr from '@/components/icons/NavigationArr.vue';

</script>

<style lang="scss" scoped></style>