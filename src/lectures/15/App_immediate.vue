<template>
  <div>
    {{ message }}
    {{ reverseMessage }}
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const message = ref('hello vue3')
const reverseMessage = ref('')

const reverseFunction = newValue => {
  console.log('즉시 실행')
    reverseMessage.value = newValue.split('').reverse().join('')

}

watch(message, (reverseFunction) => {
},
{
  immediate: true
})
</script>

<style lang="scss" scoped>

</style>