// import 'virtual:windi.css';

import "virtual:windi-base.css";
import "virtual:windi-components.css";
import "@/style/myStyle.css"; //全局样式
import "virtual:windi-utilities.css";
// import '@/style/index.less'
import { createApp } from "vue";
import App from "./App.vue";
import { setupAntd } from "./utils/init";
import router from "./router";
// import store from "./store";
console.log("xia");
const app = createApp(App);
setupAntd(app);
// app.use(router).use(store).mount('#app')
app.use(router).mount("#app");
