import { createRouter, createWebHistory } from "vue-router";
import DefaultVue from "../layouts/DefaultLayout.vue";
import WithoutLayoutVue from "@/layouts/WithoutLayout.vue";
import HomeView from "../views/HomeView.vue";
import LoginViewVue from "@/views/LoginView.vue";
import UserDetailVue from "@/views/UserDetail.vue";
import SubscriptionVueVue from "@/views/SubscriptionVue.vue";
import ProfilViewVue from "@/views/ProfilView.vue";
import SavedViewVue from "@/views/SavedView.vue";
import BalanceView from "@/views/BalanceView.vue";
import ErrorViewVue from "@/views/ErrorView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Public",
      component: DefaultVue,
      redirect: "/",
      children: [
        {
          path: "/",
          name: "home",
          component: HomeView,
        },
        {
          path: "/user/",
          name: "user-detail",
          component: UserDetailVue,
        },
        {
          path: "/subscription/",
          name: "subscription",
          component: SubscriptionVueVue,
        },
        {
          path: "/profile/",
          name: "profile",
          component: ProfilViewVue,
        },
        {
          path: "/saved/",
          name: "saved",
          component: SavedViewVue,
        },
        {
          path: "/balance/",
          name: "balance",
          component: BalanceView,
        },
        {
          path: '/:pathMatch(.*)*',
          name: "error",
          component: ErrorViewVue,
        },
      ],
    },
    {
      path: "/loginPage",
      name: "loginPage",
      component: WithoutLayoutVue,
      redirect: "/loginPage",
      children: [
        {
          path: "/login",
          name: "login",
          component: LoginViewVue,
        },
      ],
    },
  ],
});

export default router;
