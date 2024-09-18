<template>
  <v-container>
    <v-row class="pa-4">
      <v-card class="mx-auto">
        <v-card-title>ProvideInject Component</v-card-title>
        <v-card-subtitle><Child></Child></v-card-subtitle>
        <v-card-text>
          <DeepChild />
          <p>{{ appMessage }}</p>
        </v-card-text>

        <v-card-actions>
          <v-btn @click="count++" color="primary">눌러</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, provide, inject, onMounted, getCurrentInstance } from 'vue'
import Child from "./Child.vue"

const staticMessage = 'static message'
const message = ref('message')
const updateMessage = appendMessage => {
  message.value = message.value + appendMessage
}
const count = ref(10)

// provide('static-message', staticMessage)
provide('message', { message, updateMessage })
provide('count', count)

const appMessage = inject('app-message', '기본 메시지')

onMounted(() => {
  const instance = getCurrentInstance()

  if (instance) {
    console.log('global msg:', instance.appContext.config.globalProperties.msg);
  }
})
</script>

<style lang="scss" scoped>

</style>