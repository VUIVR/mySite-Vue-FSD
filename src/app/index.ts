import { createApp } from "vue";
import { router } from "./providers";
import App from "./index.vue";

// @unhead/vue
import { createHead } from "@unhead/vue";
const head = createHead();

// ElementPlus
import ElementPlus from "element-plus";
import ru from "element-plus/dist/locale/ru.mjs";

export const app = createApp(App)
.use(router)
.use(head)
.use(ElementPlus, { locale: ru });
