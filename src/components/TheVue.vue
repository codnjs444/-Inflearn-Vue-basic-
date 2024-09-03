<template>
  <main>
    <div class="container py-4">
        <div class="row g-3">
          <div v-for="items in posts" :key="items.id" class="col col-4" >
            <AppCard 
              :title= "items.title" 
              :contents="items.contents" 
              :type = "items.type"
              :is-like = "items.isLike"
            ></AppCard>
          </div>
        </div>
    </div>
  </main>
</template>

<script setup>
import AppCard from './AppCard.vue'
import { reactive } from 'vue'

const post = reactive({
  title: '제목 2',
  contents: '내용 2'
})

const posts = reactive([
  { id: 1, title: '제목 1', contents: '내용 1', isLike: true, type: 'news'},
  { id: 2, title: '제목 2', contents: '내용 2', isLike: false, type: 'news'},
  { id: 3, title: '제목 3', contents: '내용 3', isLike: true, type: 'notice'},
  { id: 4, title: '제목 4', contents: '내용 4', isLike: false, type: 'news'},
  { id: 5, title: '제목 5', contents: '내용 5', isLike: true, type: 'notice'},
  { id: 6, title: '제목 6', contents: '내용 6', isLike: true, type: 'news'},
])
</script>

<style lang="scss" scoped>

</style>