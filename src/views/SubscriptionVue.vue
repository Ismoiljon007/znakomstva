<template>
    <main>
        <div class="subscription">
            <div class="container">
                <h2 class="subscription__title">Тарифы</h2>
                <div class="subscription__items-wrapper">
                    <SubscriptionCard v-for="item in 3" :key="item" />
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import SubscriptionCard from "@/components/SubscriptionCard.vue";
</script>

<style lang="scss" scoped></style>