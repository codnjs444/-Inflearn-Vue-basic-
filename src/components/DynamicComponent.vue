<template>
  <v-container py-4>
    <v-btn color="primary" class="ma-4">사과</v-btn>
      <v-btn color="error">바나나</v-btn>
      <hr/>
      <component :is="currentComp"/>
  </v-container>
</template>

<script setup>
import {ref} from 'vue'
import DynamicApple from './DynamicApple.vue'
import DynamicBanana from './DynamicBanana.vue'

const currentComp = ref(DynamicApple)
const changeCurrentComp = comp => (currentComp.value = comp)
</script>

<style lang="scss" scoped>

</style>