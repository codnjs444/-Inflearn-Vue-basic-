<template>
  <v-container>
    <MyButton class="my-button" id="my-button" @click="sayHello"></MyButton>
    <LabelInput class="mt-4" label="이름"></LabelInput>
    <hr>
    <FancyBtn>click me</FancyBtn>
    <FancyBtn v-slot="{fancyMessage}">{{fancyMessage}}</FancyBtn>
    <FancyBtn></FancyBtn>
    <FancyBtn>
      <template v-slot="{fancyMessage}">{{fancyMessage}}</template>
    </FancyBtn>
    <hr>
    <AppCard>
      <template #header="{ headerMessage }">
        {{ headerMessage }}
      </template>
      <template #default = "{childMessage, helloMessage}">{{childMessage}}<br>{{helloMessage}}</template>
      <template #footer = "{footerMessage}">{{footerMessage}}</template>
      <!-- <template #[slotArgs]>ㄴ제목입니다ㅇ.</template>
      <template #footer>footer.</template> -->
      <!-- <template #default>ㄴ제목입니다ㅇ.</template> -->
      <!-- <template v-slot:default>내용입니다.</template> -->
      <!-- 암시적으로 Default 슬롯입니다. -->
      <!-- <template v-slot:footer>푸터입니다.</template> -->
    </AppCard>
  </v-container>

</template>

<script setup>
import { ref } from 'vue'

import MyButton from "./MyButton.vue"
import LabelInput from "./LabelInput.vue"
import FancyBtn from "./FancyButton.vue"
import AppCard from "./AppCard.vue"

const sayHello = () => {
  alert('안녕하세요.')
}
const slotArgs = ref('header')
const message = ref('안녕하세요.')
</script>

<style lang="scss" scoped>

</style>