<template>
  <v-card
    class="mx-auto"
    prepend-icon="$vuetify"
    subtitle="The #1 Vue UI Library"
    width="400"
		height="auto"
  >
    <template v-slot:title>
      <span class="font-weight-black">Welcome to Vuetify</span>
    </template>

    <v-card-text :style="styleObject" class="bg-surface-light pt-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!
    </v-card-text>

		<v-row class="justify-space-around md-12 mt-2">
			<v-btn @click="fontSize--" variant="tonal"> minus </v-btn>
			<v-btn @click="fontSize++" variant="tonal"> plus </v-btn>
		</v-row>
		<v-spacer class="mt-5"></v-spacer>
  </v-card>
</template>

<script setup>
	import { computed, ref } from 'vue';

	const fontSize = ref(13)

	const styleObject = computed(() => {
		return{
			color: 'red !important',
			fontSize: fontSize.value + 'px'
		}
	})
</script>