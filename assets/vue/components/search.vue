<template>
	<div class="searchParent">
		<span class="material-icons">search</span>
		<input class="searchInput" :placeholder="placeholder" />
	</div>
</template>

<style>

.searchInput {
	all: unset;
	width: 100%;
	padding: 1rem 0 1rem 0;
	margin-left: 1rem;
}

.searchInput:placeholder {
	color: #888888;
}

.searchParent {
	display: flex;
	align-items: center;
	background: #272525;
	padding: 0 1rem 0 1rem;
	width: 18rem;
	border-radius: 14px;
}

</style>

<script>
module.exports = {
	data: () => {
		return {
			"placeholder" : "Title, Description, Genre, Released"
		}
	}
}

</script>