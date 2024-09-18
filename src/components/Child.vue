<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-title>Child Component</v-card-title>
    
    <v-card-text>
      <DeepChild />
      {{appMessage}}
    </v-card-text>
  </v-card>
</template>

<script setup>
import {inject} from 'vue'
import DeepChild from "./DeepChild.vue"

const appMessage = inject('app-message')
</script>

<style lang="scss" scoped>

</style>
