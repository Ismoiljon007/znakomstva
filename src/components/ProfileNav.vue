<template>
    <div class="profile-nav">
        <ul>
            <li>
                <router-link to="/profile/">
                    <UserIcon /> Профиль
                </router-link>
            </li>
            <li>
                <router-link to="/saved/">
                    <BookmarkVue />
                    Избранное
                </router-link>
            </li>
            <li>
                <router-link to="/balance/">
                    <wallet />
                    Личный счет
                </router-link>
            </li>
            <li>
                <logout /> <span>logout</span>
            </li>
        </ul>
    </div>
</template>

<script setup>
import UserIcon from "./icons/User.vue"
import BookmarkVue from "./icons/Bookmark.vue"
import Wallet from "./icons/Wallet.vue"
import Logout from "./icons/Logout.vue"
</script>

<style lang="scss" scoped></style>