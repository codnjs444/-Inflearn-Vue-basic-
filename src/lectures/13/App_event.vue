<template>
  <v-container>
    <v-row>
      <v-btn @click="printEventInfo('Hello Vue3', $event)">btn</v-btn>
    </v-row>
    <v-row>
      <v-text-field @keyup="onKeyupHandler" />
    </v-row>

  </v-container>
</template>

<script setup>
const printEventInfo = (message, event) => {
  // console.log('message', message)
  // console.log('event', event)
  // console.log('event.target', event.target)
  // console.log('event.target.tagName',event.target.tagName)
}

const onKeyupHandler = (event) => {
  // console.log('event key', event.key)
}
</script>

<style lang="scss" scoped>

</style>