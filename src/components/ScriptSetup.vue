<!-- 2024-09-22: 코드 수정 및 개선 -->
<template>
  <v-container>
    {{ msg }}
    <br/>
    {{ message }}
    <v-text-field v-model="message"></v-text-field>
    <v-btn @click="sayHello">눌러</v-btn>
    <PostItem type="news" title="제목" contents="내용" :is-like="true"></PostItem>
    <!-- <TemplateRefsChild></TemplateRefsChild> -->
    <br/>
    <MyBtn class="parent-class">gd</MyBtn>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue"
import axios from 'axios'
import PostItem from './setup/PostItem.vue'
import TemplateRefsChild from './setup/TemplateRefsChild.vue'
import MyBtn from './setup/MyButton.vue'

// 상태 변수
const msg = 'Hello World'
const message = ref('')

// 함수
const sayHello = () => {
  alert('Hello World!')
}

// API 호출
const fetchEmployees = async () => {
  const response = await axios('https://dummy.restapiexample.com/api/v1/employees')
  console.log('response_data : ',response)
}

// 컴포넌트가 마운트되면 API 호출
onMounted(() => {
  fetchEmployees()
})
</script>

<style lang="scss" scoped>
</style>
