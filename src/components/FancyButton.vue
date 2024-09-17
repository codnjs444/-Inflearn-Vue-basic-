<template>
  <v-btn class="fancy-btn">
    <slot :fancy-message="fancyMessage">Default Click</slot>
  </v-btn>
</template>

<script setup>
import {ref} from 'vue'
const fancyMessage = ref('Fancy Message')
</script>

<style lang="scss" scoped>
.fancy-btn {
	color: #fff;
	background: linear-gradient(315deg, #42d392 25%, #647eff);
	border: none;
	padding: 5px 12px;
	margin: 5px;
	border-radius: 8px;
	cursor: pointer;
}
</style>