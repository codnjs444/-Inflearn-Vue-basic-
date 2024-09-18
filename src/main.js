import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import App from './App.vue'
import PostItem from './components/PostItem.vue'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css' 
import '@mdi/font/css/materialdesignicons.css'

const app = createApp(App)
app.config.globalProperties.msg = 'hello'
// PostItem 컴포넌트를 전역 등록
app.component('PostItem', PostItem)

// Vuetify 플러그인 사용
app.use(vuetify)

// provide 사용하여 전역 주입
app.provide('app-message', 'app message 입니다.')

// #app 요소에 애플리케이션 마운트
app.mount('#app')
