<template>
  <v-container class="py-4">
    <v-text-field ref="inputRef" value="hello world!"></v-text-field>
    <hr>
    <v-btn @click="visible = !visible">Toggle Child</v-btn>
    <LifecycleChild v-if="visible"></LifecycleChild>
  </v-container>
</template>

<script setup>
  import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated} from 'vue'

  import LifecycleHooks from "./LifecycleHooks.vue";
  import LifecycleChild from "./LifecycleChild.vue"

  const inputRef = ref(null)
  const visible = ref(false)

  console.log('setup')
  onBeforeMount(()=>{
    console.log('onBeforeMount')
  })
  onMounted(()=>{
    console.log('onMounted', inputRef.value.value)
  })
  onBeforeUpdate(()=>{
    console.log('onBeforeUpdate')
  })
  onUpdated(()=>{
    console.log('onUpdated')
  })
</script>

<style lang="scss" scoped>

</style>