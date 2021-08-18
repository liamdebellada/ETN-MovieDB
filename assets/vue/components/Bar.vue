<template>
	<div class="barLayout">
		<div class="barHeading">
			<img src="/ETN.svg" class="etnLogo"/>
			<span class="titleText">MovieDB</span>
		</div>
		<div class="barBody">
			<div v-on:click="() => selectedIndex = index" class="barItem" v-for="(item, index) in barItems" v-bind:key="index" v-bind:class="{active : (index == selectedIndex)}">
				<span class="material-icons">{{item.icon}}</span>
				<span>{{item.text}}</span>
			</div>
		</div>
	</div>
</template>

<style>
	.barLayout {
		height: 100%;
		background-color: #272525;
		display: grid;
		grid-template-rows: 100px 1fr;
	}

	.barHeading {
		display: flex;
		align-items: center;
		padding: 2rem
	}

	.etnLogo {
		height: 3rem;
	}

	.titleText {
		font-size: 26px;
		font-weight: 300;
		margin-left: 1.5rem
	}

	.barBody {
		display: flex;
		flex-direction: column;
		padding: 0 2rem 0 1.5rem;
	}

	.barItem {
		height: 2.5rem;
		display: flex;
		align-items: center;
		font-weight: 300;
		font-size: 1.2rem;
		transition: 0.2s ease-in-out;
	}

	.barItem span:nth-child(1) {
		margin-right: 1rem;
		padding-left: 0.5rem;
	}

	.active {
		background: #1D1B1B;
		border-radius: 14px;
	}
</style>

<script>
	module.exports = {
		data: () => {
			return {
				barItems: [
					{"icon" : "search", "text" : "Search"},
					{"icon" : "storage", "text" : "All Movies"}
				],
				selectedIndex: 1
			}
		}
	}
</script>
