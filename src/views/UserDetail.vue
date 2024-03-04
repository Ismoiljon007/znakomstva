<template>
    <main>
        <div class="user-detail">
            <div class="container">
                <Swiper @slideChange="onSlideChange"
                    :navigation="{ nextEl: '.user-detail__next', prevEl: '.user-detail__prev', }"
                    :modules="[Navigation]" :initialSlide="usersData.indexOf(userDetail)">
                    <SwiperSlide v-for="user in usersData" :key="user">
                        <div class="user-detail__card">
                            <div class="user-detail__card-images">
                                <div class="user-detail__card-image">
                                    <img :src="user.img" alt="">
                                    <Skeleton width="100%" height="100%" borderRadius="50px" style="position: absolute; top: 0;
        left: 0; z-index: 0; background: #2d1436"></Skeleton>
                                    <button class="user-detail__card-fvrt">
                                        <fvrt-icon />
                                    </button>
                                </div>
                                <div class="user-detail__card-thumbs">
                                    <div class="user-detail__card-thumb" v-for="(item, i) in user.thumbImages"
                                        :key="item">
                                        <Skeleton width="100%" height="100%" borderRadius="20px" style="position: absolute; top: 0;
        left: 0; z-index: 0; background: #2d1436"></Skeleton>
                                        <img :src="item + `?random=${i}`" alt="img">
                                    </div>

                                </div>
                            </div>
                            <div class="user-detail__card-text-wrapper">
                                <h2 class="user-detail__card-name">
                                    {{ user.name }}
                                    <span v-if="user.activity" class="active"></span>
                                </h2>
                                <button class="user-detail__card-btn"
                                    @click="store.overlay = true, store.chatModal = true">Поприветствовать 👋</button>
                                <ul class="user-detail__card-info">
                                    <li>Ставка <span></span> {{ user.formattedPrice }} руб </li>
                                    <li>Рост <span></span> {{ user.height }} </li>
                                    <li>Вес <span></span> {{ user.weight }} </li>
                                    <li>Цвет глаз <span></span> {{ user.eyeColor }} </li>
                                    <li>Цвет волос <span></span> {{ user.hairColor }} </li>
                                    <li>Цель знакомства <span></span> {{ user.purposeOfDating }} </li>
                                </ul>
                                <h4 class="user-detail__card-about-title">О себе</h4>
                                <p class="user-detail__card-about-desc">{{ user.description }}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <button class="user-detail__prev">
                        <NavigationArr />
                    </button>
                    <button class="user-detail__next">
                        <NavigationArr />
                    </button>
                </Swiper>
            </div>
        </div>
    </main>
</template>

<script setup>
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/vue"
import 'swiper/css/navigation';
import 'swiper/css';
import FvrtIcon from '@/components/icons/FvrtIcon.vue';
import NavigationArr from "@/components/icons/NavigationArr.vue";
import { useRoute, useRouter } from 'vue-router';
import { computed, onMounted, ref, watchEffect } from "vue"
import { useStore } from '@/stores/store';
const store = useStore()
const route = useRoute()
const router = useRouter()


const usersData = [
    {
        id: 1,
        img: "https://source.unsplash.com/random/300x400",
        thumbImages: [
            "https://source.unsplash.com/random/100x100",
            "https://source.unsplash.com/random/100x100",
            "https://source.unsplash.com/random/100x100",
            "https://source.unsplash.com/random/100x100"
        ],
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
        thumbImages: [
            "https://source.unsplash.com/random/100x100",
            "https://source.unsplash.com/random/100x100",
            "https://source.unsplash.com/random/100x100",
            "https://source.unsplash.com/random/100x100"
        ],
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
        thumbImages: [
            "https://source.unsplash.com/random/100x100",
            "https://source.unsplash.com/random/100x100",
            "https://source.unsplash.com/random/100x100",
            "https://source.unsplash.com/random/100x100"
        ],
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
    {
        id: 4,
        img: "https://source.unsplash.com/random/300x400",
        thumbImages: [
            "https://source.unsplash.com/random/100x100",
            "https://source.unsplash.com/random/100x100",
            "https://source.unsplash.com/random/100x100",
            "https://source.unsplash.com/random/100x100"
        ],
        name: "Екатерина Иванова",
        slug: "ekaterina-ivanova",
        activity: true,
        price: 2200, // в рублях
        formattedPrice: "2 200", // форматированная цена с разделителями тысяч
        height: "165см", // в сантиметрах
        weight: "55 кг", // в килограммах
        eyeColor: "карие",
        hairColor: "темно-каштановые",
        purposeOfDating: "Ищу серьезные отношения",
        description: "Я люблю спорт, изучать иностранные языки и общаться с интересными людьми."
    },
    {
        id: 5,
        img: "https://source.unsplash.com/random/300x400",
        thumbImages: [
            "https://source.unsplash.com/random/100x100",
            "https://source.unsplash.com/random/100x100",
            "https://source.unsplash.com/random/100x100",
            "https://source.unsplash.com/random/100x100"
        ],
        name: "Дмитрий Сидоров",
        slug: "dmitriy-sidorov",
        activity: false,
        price: 1600, // в рублях
        formattedPrice: "1 600", // форматированная цена с разделителями тысяч
        height: "180см", // в сантиметрах
        weight: "75 кг", // в килограммах
        eyeColor: "серые",
        hairColor: "темно-русые",
        purposeOfDating: "Ищу приятное общение",
        description: "Я люблю кино, музыку и активный образ жизни."
    },
    {
        id: 6,
        img: "https://source.unsplash.com/random/300x400",
        thumbImages: [
            "https://source.unsplash.com/random/100x100",
            "https://source.unsplash.com/random/100x100",
            "https://source.unsplash.com/random/100x100",
            "https://source.unsplash.com/random/100x100"
        ],
        name: "Анна Кузнецова",
        slug: "anna-kuznetsova",
        activity: true,
        price: 1900, // в рублях
        formattedPrice: "1 900", // форматированная цена с разделителями тысяч
        height: "170см", // в сантиметрах
        weight: "60 кг", // в килограммах
        eyeColor: "голубые",
        hairColor: "блонд",
        purposeOfDating: "Ищу дружбу и общение",
        description: "Я люблю путешествия, общение с интересными людьми и чтение книг."
    },
    {
        id: 7,
        img: "https://source.unsplash.com/random/300x400",
        thumbImages: [
            "https://source.unsplash.com/random/100x100",
            "https://source.unsplash.com/random/100x100",
            "https://source.unsplash.com/random/100x100",
            "https://source.unsplash.com/random/100x100"
        ],
        name: "Павел Николаев",
        slug: "pavel-nikolaev",
        activity: true,
        price: 2100, // в рублях
        formattedPrice: "2 100", // форматированная цена с разделителями тысяч
        height: "185см", // в сантиметрах
        weight: "90 кг", // в килограммах
        eyeColor: "карие",
        hairColor: "черные",
        purposeOfDating: "Ищу серьезные отношения",
        description: "Я ценю честность и искренность в отношениях, люблю активный отдых и спорт."
    },
    {
        id: 8,
        img: "https://source.unsplash.com/random/300x400",
        thumbImages: [
            "https://source.unsplash.com/random/100x100",
            "https://source.unsplash.com/random/100x100",
            "https://source.unsplash.com/random/100x100",
            "https://source.unsplash.com/random/100x100"
        ],
        name: "Алиса Попова",
        slug: "alisa-popova",
        activity: false,
        price: 1800, // в рублях
        formattedPrice: "1 800", // форматированная цена с разделителями тысяч
        height: "160см", // в сантиметрах
        weight: "50 кг", // в килограммах
        eyeColor: "зеленые",
        hairColor: "рыжие",
        purposeOfDating: "Просто общение",
        description: "Я люблю рисовать, слушать музыку и проводить время с друзьями."
    },
    {
        id: 9,
        img: "https://source.unsplash.com/random/300x400",
        thumbImages: [
            "https://source.unsplash.com/random/100x100",
            "https://source.unsplash.com/random/100x100",
            "https://source.unsplash.com/random/100x100",
            "https://source.unsplash.com/random/100x100"
        ],
        name: "Артем Белов",
        slug: "artem-belov",
        activity: true,
        price: 2400, // в рублях
        formattedPrice: "2 400", // форматированная цена с разделителями тысяч
        height: "180см", // в сантиметрах
        weight: "80 кг", // в килограммах
        eyeColor: "серые",
        hairColor: "темно-русые",
        purposeOfDating: "Ищу серьезные отношения",
        description: "Я люблю спорт, путешествия и активный отдых на природе."
    },
    {
        id: 10,
        img: "https://source.unsplash.com/random/300x400",
        thumbImages: [
            "https://source.unsplash.com/random/100x100",
            "https://source.unsplash.com/random/100x100",
            "https://source.unsplash.com/random/100x100",
            "https://source.unsplash.com/random/100x100"
        ],
        name: "Елена Морозова",
        slug: "elena-morozova",
        activity: false,
        price: 1700, // в рублях
        formattedPrice: "1 700", // форматированная цена с разделителями тысяч
        height: "165см", // в сантиметрах
        weight: "55 кг", // в килограммах
        eyeColor: "карие",
        hairColor: "черные",
        purposeOfDating: "Просто общение",
        description: "Я люблю путешествия, чтение книг и общение с друзьями."
    }
];



async function onSlideChange(swiper) {
    if (swiper.swipeDirection == 'prev') {
        router.push({ name: 'user-detail', path: '/user/', query: { slug: usersData[usersData.indexOf(userDetail.value) - 1].slug, id: usersData[usersData.indexOf(userDetail.value) - 1].id } })
    } else if (swiper.swipeDirection == 'next') {
        router.push({ name: 'user-detail', path: '/user/', query: { slug: usersData[usersData.indexOf(userDetail.value) + 1].slug, id: usersData[usersData.indexOf(userDetail.value) + 1].id } })
    }
}

const userDetail = computed(() => {
    const item = usersData.find(el => el.id == route.query.id)
    return item
})
</script>

<style lang="scss" scoped></style>