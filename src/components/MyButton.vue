<template>
  <v-row class="p-3 bg-danger">
    <v-btn v-bind="$attrs">My Button</v-btn>
  </v-row>
</template>

<script setup>
import { onMounted, useAttrs } from "vue";

defineOptions({
  inheritAttrs: false,
});

const attrs = useAttrs()

onMounted(() => {
  console.log(attrs)
  console.log(attrs.class)
  console.log(attrs.id)
})

</script>

