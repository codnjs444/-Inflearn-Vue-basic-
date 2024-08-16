<template>
	<div>
		<h2>{{ reactiveMessage }}</h2>
		<v-btn variant="outlined" @click="ReactiveMessage"> 메세지 추가 </v-btn>

		<h2>{{ normalMessage }}</h2>
		<v-btn variant="outlined" @click="NormalMessage"> 메세지 추가 </v-btn>
	</div>
</template>

<script setup>
import { ref, isRef, onMounted, onBeforeMount } from 'vue';

const reactiveMessage = ref('반응형 메시지');
let normalMessage = '일반 메시지';

onBeforeMount(() => {
	console.log('onBeforeMount');
});

onMounted(() => {
	console.log('onMounted');
});

const ReactiveMessage = () => {
	reactiveMessage.value = reactiveMessage.value + '!';
	console.log(isRef(reactiveMessage));
};

const NormalMessage = () => {
	normalMessage = normalMessage + '!';
};
</script>

<style lang="scss" scoped></style>
