<template>
	<button class="primaryButton"><a :href="location">Add Movie</a></button>
</template>

<style>

.primaryButton {
	all: unset;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #45AAE0;
	border-radius: 14px;
	width: 100%;
	max-width: 8rem
}

.primaryButton a {
	all: unset;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	padding: 1rem;
	cursor: pointer;
}
</style>

<script>
export default {
	props: ['location']
}
</script>