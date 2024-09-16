<template>
  <v-row>
      <v-col cols="2">
        <select v-model="type" class="form-select" aria-label="Default select example">
          <option value="news">뉴스</option>
          <option value="notice">공지사항</option>
        </select>
      </v-col>
      <v-col cols="8">
        <input v-model="title" type="text" class="form-control">
      </v-col>
      <v-col cols="2" class="d-grid">
        <v-btn class="btn btn-primary" @click="createPost">Emit Event</v-btn>
      </v-col>
  </v-row>
</template>

<script setup>
import { ref, defineEmits } from 'vue'

const type = ref('news')

const title = ref('') 
const emit = defineEmits({
    'create-post': newPost => {
      if(!newPost.type){
        return false
      } else if (!newPost.title){
        return false
      }
      return true
  }
})

const createPost = () =>{
  const newPost = {
    type: type.value,
    title: title.value
  }
  emit('create-post', newPost)
  type.value = 'news'
  title.value = ''
}
</script>

<style lang="scss" scoped>

</style>