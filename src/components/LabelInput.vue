<template>
  <label>
    {{ label }}
      <v-text-field
        v-model="username"
        hide-details="auto"
        style="width:300px"
      ></v-text-field>
    {{ username }}
  </label>
</template>

<script setup>
const props = defineProps({
  label: String  // 부모로부터 label을 받음
})

const username = defineModel({ type: String })  // v-model로 양방향 바인딩 처리
</script>

<style lang="scss" scoped>
</style>
