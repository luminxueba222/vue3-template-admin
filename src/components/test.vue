<template>
	<div class="sm:bg-red-500">vue3sssssssssssssssssssssssssssssssss</div>
	<div class="md:bg-red-500">vue3sssssssssssssssssssssssssssssssss</div>
	<div class="lg:bg-red-500">vue3sssssssssssssssssssssssssssssssss</div>
	<div class="xl:bg-red-500">vue3sssssssssssssssssssssssssssssssss</div>
	<div class="qj:bg-yellow-500">vue3sssssssssssssssssssssssssssssssss</div>
	<div>
		<a-input :placeholder="'xxxxxxxxxxxxxxx'" @change="handleSearchChange" />
		<a-button type="primary">Primary</a-button>
	</div>
</template>
<script lang="ts">
export default {
	setup() {
		const handleSearchChange = () => {}
		return {
			handleSearchChange,
		}
	},
}
</script>
<style scoped></style>
