import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // 아이콘 설치 후 추가
import '@mdi/font/css/materialdesignicons.css' // Material Design Icons를 사용

createApp(App)
    .use(vuetify)  // Vuetify 플러그인 사용
    .mount('#app') // 앱 마운트

// Bootstrap CSS와 JS는 전역에서 사용되므로 따로 use로 추가할 필요는 없습니다.
