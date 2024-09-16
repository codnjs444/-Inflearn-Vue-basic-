<template>
  <div>
    <labelInput v-model="firstname" label="성"></labelInput>
    <labelInput v-model="lastname" label="이름"></labelInput>
  </div>
</template>


<script setup>
  import labelInput from './LabelInput.vue'

  const firstname = defineModel('firstname', { type: String })
  const lastname = defineModel('lastname', { type: String })
</script>

<style lang="scss" scoped>

</style>