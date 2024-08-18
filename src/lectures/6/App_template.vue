<template>
  <v-row>
    <v-col cols="12">
      <h2 style="text-align:left">보간법</h2>
      <span v-html="htmTest"></span>
      <v-divider></v-divider>
      <p> 일반 : {{ poketMon }} </p>
      <p v-once> v-once 적용 : {{ poketMon }} </p>
    </v-col>
    <v-col cols="12">
      <v-btn @click="throwPoketMon">잡아라</v-btn>
    </v-col>
    <v-col cols="12" style="text-align:center;">ㄴ
      <v-input>ㅇㅇㅇ</v-input>
    </v-col>

    <v-col cols="12">
      <h2 v-bind:title="dynamicTitle" style="text-align:left">속성 바인딩</h2>
      <v-title :title="dynamicTitle"> ㅎㅇ</v-title>
      <v-text-field
        value="홍길동"
        v-bind:disabled="isInputDisabled"
      ></v-text-field>
      <v-text-field v-bind="attrs"/>
    </v-col>

    <v-col cols="12">
      <h2 v-bind:title="dynamicTitle" style="text-align:left">JavaScript</h2>
      {{ poketMon.split('').reverse().join('') }}
      {{ isInputDisabled ? '예' : '아니오'}}
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
const isInputDisalbed = ref(false)
const dynamicTitle = ref('안녕하셔요')

const attrs = ref({
  type: 'password',
  value:'12345678',
  disabled: false,
})
</script>

<style lang="scss" scoped>
</style>
