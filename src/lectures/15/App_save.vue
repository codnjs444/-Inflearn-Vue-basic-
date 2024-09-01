<template>
  <v-form @submit.prevent="save">
    <v-text-field
      v-model.lazy="title"
      placeholder="Title"
    ></v-text-field>
    <v-text-field
      v-model.lazy="contents"
      placeholder="Contents"
    ></v-text-field>
    <v-btn type="submit">
      저장
    </v-btn>
  </v-form>
</template>

<script setup>
import { ref } from "vue"

const title = ref('')
const contents = ref('')

const save = () => {
  console.log('저장되었습니다. title :', title.value, 'contents :', contents.value)
}
</script>

<style lang="scss" scoped>

</style>
