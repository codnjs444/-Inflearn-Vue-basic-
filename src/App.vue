 <template>
	<v-container>
		<v-sheet
			class="pa-4 text-center mx-auto"
			elevation="12"
			max-width="600"
			rounded="lg"
			width="100%"
		>
			<v-icon
				class="mb-5"
				color="success"
				icon="mdi-check-circle"
				size="112"
			></v-icon>

			<h2 class="text-h5 mb-6">You reconciled this account</h2>
			

			<p class="mb-4 text-medium-emphasis text-body-2">
				To see a report on this reconciliation, click <a class="text-decoration-none text-info" href="#">View reconciliation report.</a>

				<br>

				Otherwise, you're done!
			</p>

			<v-divider class="mb-4"></v-divider>

			<div class="text-end">
				<v-btn
					class="text-none"
					color="success"
					variant="flat"
					width="90"
					rounded
				>
					Done
				</v-btn>
			</div>
		</v-sheet>
	</v-container>
 </template>
 
 <script setup>
 
 </script>
 
 <style lang="scss" scoped>
 
 </style>

 v-model로 바인딩 하는 게 있어서
 만약 그 v-model의 값이 1일 때는
 v-model값을 text로 출력하자