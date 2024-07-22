import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import "@arco-design/web-vue/dist/arco.css";
import ArcoVueIcon from "@arco-design/web-vue/es/icon";
// 創建 Pinia 實例
const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.use(ArcoVueIcon);
app.mount("#app");
