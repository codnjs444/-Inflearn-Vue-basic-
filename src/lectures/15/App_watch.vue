<template>
  <div>
    {{ message }}
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const message = ref('동해물과')
watch(message, (newValue, oldValue) => {
  console.log('newValue:',newValue)
  console.log('oldValue:',oldValue)
})

setTimeout(() => {
  message.value = '백두산이 마르고 닳도록';
}, 2000);
</script>

<style lang="scss" scoped>

</style>