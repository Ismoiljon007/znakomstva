<template>
    <main>
        <div class="profile">
            <div class="container">
                <ProfileNav />
                <div class="profile-main">
                    <h2 class="profile__title">Избранное</h2>
                    <div class="profile__saved-users">
                        <user-card :user="item" v-for="item in usersData" :key="item" />
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import ProfileNav from '@/components/ProfileNav.vue';
import UserCard from '@/components/UserCard.vue';

const usersData = [
    {
        id: 1,
        img: "https://source.unsplash.com/random/300x400",
        name: "Иван Иванов",
        slug: "ivan-ivanov",
        activity: true,
        price: 1500, // в рублях
        formattedPrice: "1 500", // форматированная цена с разделителями тысяч
        height: "188см", // в сантиметрах
        weight: "82 кг", // в килограммах
        eyeColor: "коричневые",
        hairColor: "черные",
        purposeOfDating: "В поисках серьезных отношений",
        description: "Я легкомысленный человек, люблю активный отдых и времяпровождение с близкими."
    },
    {
        id: 2,
        img: "https://source.unsplash.com/random/300x400",
        name: "Мария Смирнова",
        slug: "maria-smirnova",
        activity: false,
        price: 2000, // в рублях
        formattedPrice: "2 000", // форматированная цена с разделителями тысяч
        height: "173см", // в сантиметрах
        weight: "63 кг", // в килограммах
        eyeColor: "голубые",
        hairColor: "русые",
        purposeOfDating: "Просто попробовать",
        description: "Я люблю читать, готовить и исследовать новые места."
    },
    {
        id: 3,
        img: "https://source.unsplash.com/random/300x400",
        name: "Алексей Петров",
        slug: "alexey-petrov",
        activity: true,
        price: 1800, // в рублях
        formattedPrice: "1 800", // форматированная цена с разделителями тысяч
        height: "175см", // в сантиметрах
        weight: "70 кг", // в килограммах
        eyeColor: "зеленые",
        hairColor: "русые",
        purposeOfDating: "Ищу интересные знакомства",
        description: "Я обожаю путешествовать и открыт для новых знакомств."
    },

];

</script>

<style lang="scss" scoped></style>