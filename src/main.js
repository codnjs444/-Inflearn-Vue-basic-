import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import App from './App.vue'
import PostItem from './components/PostItem.vue'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css' 
import '@mdi/font/css/materialdesignicons.css'

createApp(App)
    .component('PostItem', PostItem)
    .use(vuetify) 
    .mount('#app') 