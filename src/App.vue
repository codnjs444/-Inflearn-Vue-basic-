<template>
	<v-container>
		<v-row style="width: 100%">
			<v-col cols="12" style="background-color: aqua">
				{{ item }}
			</v-col>

			<v-col cols="12">
				<btn @click="poketmon">몬스터볼</btn>
			</v-col>
		</v-row>
	</v-container>
</template>

<script setup>
import { ref } from 'vue';

const item = ref('피카츄');
const poketmon = () => {
	item.value += '가라';
};
</script>
