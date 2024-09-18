<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-title>Lifecycle Child</v-card-title>
  </v-card>
</template>

<script setup>
  import { ref, onBeforeMount, onMounted, onUnmounted, onBeforeUnmount} from 'vue'

  console.log('[Child] setup')
  onBeforeMount(()=>{
    console.log('[Child] onBeforeMount')
  })
  onMounted(()=>{
    console.log('[Child] onMounted')
  })
  onBeforeUnmount(()=>{
    console.log('[Child] onBeforeUnmount')
  })
  onUnmounted(()=>{
    console.log('[Child] onUnmounted')
  })
</script>

<style lang="scss" scoped>

</style>