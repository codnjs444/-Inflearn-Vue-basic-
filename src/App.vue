<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="d-flex flex-column">
        <h2>텍스트 필드</h2>
        <v-text-field 
          class="mt-5"
          v-model="myTest"
          color="primary"        
          outlined                                
          label="Enter text"
          style="width: 100%"
        ></v-text-field>
        {{ myTest }}
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12" class="d-flex flex-column">
        <h2 class="mt-5">Check Box</h2>
        <v-checkbox v-model="isChecked">dd</v-checkbox>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const myTest = ref('')
const isChecked = ref(false)
</script>
