<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        {{ original }}
      </v-col>
      <v-col cols="12">
        {{ copy }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { readonly, reactive } from "vue"

// original을 readonly로 선언
const original = readonly(
  reactive({
    count: 0
  })
)
const copy = original

copy.count++

// 이 시도는 오류를 발생시킵니다. (읽기 전용이므로)
// original.count++

console.log(original)
console.log(copy)
</script>

<style lang="scss" scoped>

</style>
