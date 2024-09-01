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
      <v-col cols="12">
        <h2 class="mt-5">Check Box</h2>
          <v-row v-for="item in fruitBox" :key="item.id" align="center">
            <v-checkbox 
              v-model = "isChecked"
              color = "red"
              :label = item.name
              :value="item.id"
            ></v-checkbox>
            <span v-if="isChecked.includes(item.id)">
              {{ item.price }} 원
            </span>
         </v-row>
      </v-col>

      <v-divider></v-divider>

      <v-col cols="12">
        <h2 class="mt-5">Select Box</h2>
          <v-select
            v-model="favorites"
            :items="states"
            hint="Pick your favorite states"
            label="Select"
            multiple
            persistent-hint
          ></v-select>
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const myTest = ref('')
const isChecked = ref([])
const fruitBox = ref([
  { id : 1 , name : "mango", price : "3000"},
  { id : 2 , name : "apple", price : "5000"},
  { id : 3 , name : "grape", price : "3300"},
])
const favorites = ref([])

const states = [
  'Alabama', 'Alaska', 'American Samoa', 'Arizona',
  'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'District of Columbia', 'Federated States of Micronesia',
  'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
]
</script>
