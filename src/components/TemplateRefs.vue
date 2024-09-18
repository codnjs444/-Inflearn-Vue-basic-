<template>
  <v-container class="py-3">
    <v-text-field ref="input"></v-text-field>
  <ul>
    <li v-for="fruit in fruits" :key="fruit" ref="itemRefs">{{fruit}}</li>
  </ul>
    <!-- <p>{{ input }}</p>
    <hr>
    <p v-if="input">{{ input }}</p> -->
  <hr>
  <TemplateRefsChild ref="child"></TemplateRefsChild>
  </v-container>
</template>

<script setup>
import { onMounted, ref } from 'vue'

import TemplateRefsChild from './TemplateRefsChild.vue'

const input = ref(null)

onMounted(()=>{
  input.value.value = 'Hello World'
  console.log('input.value',input.value)
  itemRefs.value.forEach(item => console.log('item',item.textContent))
  console.log('child.message:',child.value.message)
  // child.value.sayHello()
})

const fruits = ref(['사과', '딸기', '포도'])
const itemRefs = ref([])

const child = ref(null)
</script>

<style lang="scss" scoped>

</style>