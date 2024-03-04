<template>
  <main>
    <div class="users">
      <div class="container">
        <h2 class="users__title">Топ для знакомств</h2>
        <Swiper :slides-per-view="'auto'" :space-between="20">
          <SwiperSlide v-for="item in usersData" :key="item">
            <user-card :user="item" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    <div class="users">
      <div class="container">
        <h2 class="users__title">Ищу парня</h2>
        <Swiper :slides-per-view="'auto'" :space-between="20">
          <SwiperSlide v-for="item in usersData" :key="item">
            <user-card :user="item" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    <div class="users">
      <div class="container">
        <h2 class="users__title">Мужчины</h2>
        <Swiper :slides-per-view="'auto'" :space-between="20">
          <SwiperSlide v-for="item in usersData" :key="item">
            <user-card :user="item" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </main>
</template>

<script setup>
import UserCard from "@/components/UserCard.vue"
import { useRoute } from 'vue-router';
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";


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
  {
    id: 4,
    img: "https://source.unsplash.com/random/300x400",
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

</script>

<style lang="scss" scoped></style>