<template>
  <div>

  </div>
</template>

<script setup>
const x = ref(0)
const y = ref(0)

const obj = reactive({
  count: 0,
})

watch(() =>{
  x.value + y.value,
  sum => {
    console.log('sum:', sum)
    console.log('oldValue', oldValue)
  }
})

watch(obj, (newValue,oldValue) => {
  console.log('newValue:', newValue)
})
</script>

<style lang="scss" scoped>

</style>