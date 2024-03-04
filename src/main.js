import "./assets/main.css";
import "./assets/scss/main.scss";
import "primeflex/primeflex.css";
import "primevue/resources/themes/aura-light-green/theme.css";
import "primevue/resources/primevue.min.css"; /* Deprecated */
import "primeicons/primeicons.css";
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import PrimeVue from "primevue/config";

import Skeleton from "primevue/skeleton";

import Dropdown from "primevue/dropdown";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);

app.component("Skeleton", Skeleton);
app.component("Dropdown", Dropdown);

app.mount("#app");
