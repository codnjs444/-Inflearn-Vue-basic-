<template>
  <div>
    {{$parent}}
  </div>
</template>

<script setup>
import {ref} from 'vue'

const message = ref('Hello !')
const sayHello = () => {
  alert(message)
}
</script>

<style lang="scss" scoped>

</style>