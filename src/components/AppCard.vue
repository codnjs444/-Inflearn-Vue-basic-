<template>
  <div class="card">
    <div v-if="$slots.header" class="card-header">
      <slot name="header" :header-message="'헤더 메시지'">#Header</slot>
    </div>
    <div v-if="$slots.default" class="card-body">
      <slot :child-message="childMessage" hello-message="안녕하세요.">#Body</slot>
    </div>
    <div v-if="$slots.footer" class="card-footer text-body-secondary">
      <slot name="footer" :footer-message="'푸터 메시지'">#Footer</slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const childMessage = ref('자식 컴포넌트 메시지')
</script>

<style lang="scss" scoped>

</style>