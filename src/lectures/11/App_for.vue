<template>
  <v-container>
    <v-row justify="center" class="mt-4">
      <h2 v-if="visible">Hello Vue3</h2>
      <h2 v-else>false 입니다.</h2>
    </v-row>
    <v-row justify="center" class="mt-4">
      <v-btn @click="visible = !visible"> toggle</v-btn>
    </v-row>
    <v-row justify="center" class="mt-4">
      <v-btn @click="selectType(item)" v-for="(item, index) in type" :key="index">{{item}}</v-btn>
    </v-row>
    <v-row justify="center" class="mt-4" style="font-weight: 300; font-size: 100px">
      {{ selectedBtn }} 
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)
const type = ref(['a','b','c','d'])
const selectedBtn = ref('')
const selectType = (item) => {
  selectedBtn.value = item
}
</script>

<style lang="scss" scoped>

</style>