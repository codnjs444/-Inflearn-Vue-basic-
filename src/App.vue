<template>
  <v-row>
    <v-col cols="12">
      <span v-html="htmTest"></span>
      <p v-once> {{ poketMon }} </p>
    </v-col>
    <v-col cols="12">
      <v-btn @click="throwPoketMon">잡아라</v-btn>
    </v-col>
    <v-col cols="12" style="text-align:center;">
      <v-input>ㅇㅇㅇ</v-input>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from 'vue'

const poketMon = ref('피카츄')

const throwPoketMon = () => {
  poketMon.value = poketMon.value + ' 가라'
}

const htmTest = ref('<strong>강한 문자</strong>')
</script>

<style lang="scss" scoped>
</style>
