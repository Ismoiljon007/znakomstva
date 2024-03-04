<template>
    <main>
        <div class="profile">
            <div class="container">
                <ProfileNav />
                <div class="profile-main">
                    <h2 class="profile__title">Личный счет</h2>
                    <ul class="profile__balance">
                        <li>Статус подписки <span>На месяц, до 20.11.2021</span></li>
                        <li>Текущий баланс <span>2548 руб</span></li>
                    </ul>
                    <button class="profile__balance-btn">Пополнить</button>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import ProfileNav from '@/components/ProfileNav.vue';
</script>

<style lang="scss" scoped></style>