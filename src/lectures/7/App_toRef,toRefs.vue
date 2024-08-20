<template>
  <v-container>
    <v-row>
      <v-col cols = 12 style="background-color:red;">
        {{ book.author }}
      </v-col>
      <v-col cols = 12 style="background-color:red;">
        {{ author }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import {reactive, toRefs} from 'vue'

const book = reactive({
  author: '데일 카네기',
  year: '2002',
  title: '자기관리론',
  description: "내일의 걱정을 오늘 하지마라",
  price: '18900',
})

const { author, year, title, description } = toRefs(book)

</script>

<style lang="scss" scoped>

</style>