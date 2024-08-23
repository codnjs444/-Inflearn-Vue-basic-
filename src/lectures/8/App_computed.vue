<template>
	<v-container>
		<v-row>
			<h2>{{ teacher.name }}</h2>
		</v-row>
		<v-row>
			<h2> 강의가 있습니까? </h2>
			<v-col cols="12">
				<!-- <p>{{ teacher.lecture.length > 0 ? '있음' : '없음'  }}</p> -->
				 <p> {{ hasLecture }} </p>
				 <p> {{ fullName  }}</p>
				 <v-btn @click="changeName">눌러</v-btn>
			</v-col>
		</v-row>
	</v-container>
</template>

<script setup>
import { ref, computed } from 'vue' 

const teacher = ref({
	name : '이채원',
	lecture : ['HTML/CSS','JavaScript','Vue.js3']
})

const hasLecture = computed (() => {
	return teacher.value.lecture.length > 0 ? '있음' : '없음' 
})

const firstName = ref('홈')
const lastName = ref('길동')
const fullName = computed(() => firstName.value + '' + lastName.value)
const changeName = () => {
	const FirstNames = ['김', '이', '박']
	const randomNames = Math.floor(Math.random() * FirstNames.length)
	firstName.value = FirstNames[randomNames]
	console.log('추가')
}

</script>

<style lang="scss" scoped></style>
