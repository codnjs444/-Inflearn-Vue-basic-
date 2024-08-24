<template>
  <v-container>
    <v-text-field style="width: 400px" @keyup.ctrl="addTodo"></v-text-field>
    <v-row v-for="(todo,index) in todos" :key="index">
      {{todo}}
    </v-row>
  </v-container>
</template>

<script setup>
import { reactive, ref } from 'vue'

const todos = reactive([])

const addTodo = (event) => {
  if(event.key === 'Enter'){
    todos.push(event.target.value)
  }
}
</script>

<style lang="scss" scoped>

</style>