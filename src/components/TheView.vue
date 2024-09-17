<template>
  <v-container>
    <MyButton class="my-button" id="my-button" @click="sayHello"></MyButton>
    <LabelInput class="mt-4" label="이름"></LabelInput>
  </v-container>

</template>

<script setup>
import MyButton from "./MyButton.vue"
import LabelInput from "./LabelInput.vue"

const sayHello = () => {
  alert('안녕하세요.')
}
</script>

<style lang="scss" scoped>

</style>