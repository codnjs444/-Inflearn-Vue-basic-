<template>
  <v-container>
    <v-row>
      <v-button @click="increase"> Click {{ state.count }}</v-button>
    </v-row>
    <v-row>
      <v-button @click="increase">Deep Click {{ state.deep.count }}</v-button>
    </v-row>
  </v-container>
</template>

<script setup>
import { reactive } from "vue";

const state = reactive({
  count: 0,
  deep:{
    count:0
  }
})
const increase = () => {
  state.count++
  state.deep.count++
}
</script>

<style lang="scss" scoped>

</style>