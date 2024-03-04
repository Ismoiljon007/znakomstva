<template>
    <div class="user-card">
        <Skeleton width="100%" height="100%" borderRadius="30px" style="position: absolute; top: 0;
        left: 0; z-index: 0; background: #2d1436"></Skeleton>
        <img :src="user.img + `?random=${user.id}`" alt="user image" height="100%" class="user-card__img">
        <div class="user-card__wrapper">
            <div class="user-card__text-wrapper">
                <router-link class="user-card__name"
                    :to="{ name: 'user-detail', path: '/user/', query: { slug: user.slug, id: user.id } }">
                    {{ user?.name }}
                    <span v-if="user.activity" class="active"></span>
                </router-link>
                <div class="user-card__location">
                    <img src="@/assets/images/png/russia.png" alt="">
                    <span>Россия</span>
                </div>
            </div>
            <button class="user-card__btn" @click="store.overlay = true, store.chatModal = true">
                Поприветствовать 👋
            </button>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useStore } from '@/stores/store';
const store = useStore()
const { user } = defineProps(['user'])
</script>

<style lang="scss" scoped></style>