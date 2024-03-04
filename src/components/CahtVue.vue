<template>
    <transition name="chat">
        <div class="chat" v-if="store.chatModal">
            <div class="chat-nav">
                <div class="chat-nav__user" v-for="item in 4" :key="item">
                    <div class="chat-nav__user-img">
                        <img src="https://picsum.photos/100" alt="">
                    </div>
                    <div class="chat-nav__user-text-wrapper">
                        <h4 class="chat-nav__user-name">Марина <span class="active"></span></h4>
                        <p class="chat-nav__user-message">Привет! Как дела?</p>
                    </div>
                    <span class="chat-nav__user-count">1</span>
                </div>
            </div>
            <div class="chat-main">
                <h3 class="chat-main__name">Алёна 22 <span class="active"></span></h3>
                <ul class="chat-main__list">
                    <li class="chat-main__user">
                        <div class="chat-main__user-img">
                            <img src="https://picsum.photos/50" alt="">
                        </div>
                        <p class="chat-main__user-message">
                            Привет
                            Текст сообщения будет тут
                        </p>
                    </li>
                    <li class="chat-main__user me">
                        <div class="chat-main__user-img">
                            <img src="https://picsum.photos/50" alt="">
                        </div>
                        <p class="chat-main__user-message">
                            Привет
                            Текст сообщения будет тут
                        </p>
                    </li>
                    <li class="chat-main__user">
                        <div class="chat-main__user-img">
                            <img src="https://picsum.photos/50" alt="">
                        </div>
                        <p class="chat-main__user-message">
                            Привет
                            Текст сообщения будет тут
                        </p>
                    </li>
                    <li class="chat-main__user me">
                        <div class="chat-main__user-img">
                            <img src="https://picsum.photos/50" alt="">
                        </div>
                        <p class="chat-main__user-message">
                            Привет
                            Текст сообщения будет тут
                        </p>
                    </li>
                    <li class="chat-main__user">
                        <div class="chat-main__user-img">
                            <img src="https://picsum.photos/50" alt="">
                        </div>
                        <p class="chat-main__user-message">
                            Привет
                            Текст сообщения будет тут
                        </p>
                    </li>
                    <li class="chat-main__user me">
                        <div class="chat-main__user-img">
                            <img src="https://picsum.photos/50" alt="">
                        </div>
                        <p class="chat-main__user-message">
                            Привет
                            Текст сообщения будет тут
                        </p>
                    </li>
                    <li class="chat-main__user">
                        <div class="chat-main__user-img">
                            <img src="https://picsum.photos/50" alt="">
                        </div>
                        <p class="chat-main__user-message">
                            Привет
                            Текст сообщения будет тут
                        </p>
                    </li>
                    <li class="chat-main__user me">
                        <div class="chat-main__user-img">
                            <img src="https://picsum.photos/50" alt="">
                        </div>
                        <p class="chat-main__user-message">
                            Привет
                            Текст сообщения будет тут
                        </p>
                    </li>
                </ul>
                <form @submit.prevent="">
                    <input placeholder="Написать сообщение..." type="text">
                    <button>
                        <send-icon />
                    </button>
                </form>
            </div>
        </div>
    </transition>
</template>

<script setup>
import SendIcon from '@/components/icons/SendIcon.vue';
import { useStore } from '@/stores/store';
const store = useStore()
</script>

<style lang="scss">
.chat-enter-from,
.chat-leave-to {
    opacity: 0;
    scale: 0.9;
    transition: 0.3s all ease;

}

.chat-enter-active,
.chat-leave-active {
    transition: 0.3s all ease;
    scale: 1;
}
</style>