<template>
  <v-row class="p-3 bg-danger">
    <v-btn v-bind="$attrs">{{message}}</v-btn>
  </v-row>
</template>

<script setup>
import { onMounted, ref, useAttrs } from "vue";

defineOptions({
  inheritAttrs: false,
});

const attrs = useAttrs()
const message = ref('message')

onMounted(() => {
  console.log(attrs)
  console.log(attrs.class)
  console.log(attrs.id)
})

</script>

