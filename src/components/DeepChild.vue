<template>
  <v-card class="mx-auto">
    <v-card-title>DeepChild Component</v-card-title>
    
    <v-card-text>
      <p>staticMessage : {{staticMessage}}</p>
      <p>message : {{message}}</p>
      <p>count : {{count}}</p>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { inject } from 'vue'

const staticMessage = inject('static-message', '없을 때처리')
const {message, updateMessage} = inject('message')
updateMessage('!!!')
const count = inject('count')

</script>

<style lang="scss" scoped>

</style>