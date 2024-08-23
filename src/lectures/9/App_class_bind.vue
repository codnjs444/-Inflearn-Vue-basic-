<template>
	<v-container>
		<v-row :class="{ active: isActive, 'text-danger': hasError}">
			안녕
		</v-row>
		<v-row>
			<v-btn @click="ChangeActive">변경</v-btn>
		</v-row>
		<v-row>
			<v-btn @click="hasError = !hasError">text-danger</v-btn>
		</v-row>
	</v-container>
</template>

<script setup>
	import { ref } from 'vue'

	const isActive = ref(true)
	const ChangeActive = () => {
		isActive.value = !isActive.value
	}
	const hasError = ref(false)
</script>

<style lang="scss" scoped>
.active {
	background-color: chocolate
}
.text-danger {
	color: red
}
</style>