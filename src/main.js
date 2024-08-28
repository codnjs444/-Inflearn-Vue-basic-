import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // 아이콘 설치 후 추가


createApp(App)
    .use(vuetify)
    .mount('#app')

