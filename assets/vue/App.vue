<template>
	<div class="layout">
		<div class="bar">
			<Bar/>
		</div>
		<div class="main">
			<div class="titleContainer">
				<div>
					<span class="titleText primaryTitle">All Movies</span>
					<span class="titleText primaryTitle">testaksdjfklajsdf</span>
				</div>
				<div class="widgetContainer">
					<Search/>
					<PrimaryButton/>
				</div>
			</div>
			<div>
				<div class="headingContainer">
					<h2 class="headingText">Recently added</h2>
					<span class="headingSub">14 movies</span>
				</div>
				<div class="cardListContainer">
					<RecentCard/>
					<RecentCard/>
					<RecentCard/>
				</div>
			</div>
			<div class="dataContainer">
				<div class="headingContainer">
					<h2 class="headingText">Collection</h2>
					<span class="headingSub">120 movies</span>
				</div>
				<div class="tableContainer">
					<table cellspacing="0" class="dataTable">
						<thead>
							<th>Title</th>
							<th>Description</th>
							<th class="smallHeading">Genre</th>
							<th class="smallHeading">Released</th>
						</thead>
						<tbody>
							<tr v-for="(item, index) in test" :key="item" v-bind:class="{evenRow: index % 2 == 1}">
								<td>Captain Marvel</td>
								<td>Captain Marvel</td>
								<td>Captain Marvel</td>
								<td>Captain Marvel</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
.layout {
	height: 100%;
	display: grid;
	grid-template-columns: 350px 1fr;
}

.layout > div {
	height: 100%;
}

.main {
	display: grid;
	grid-template-rows: 100px 0.4fr 1fr;
	margin-left: 2rem;
	margin-right: 2rem;
}

.titleContainer {
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid #515151;
}

.widgetContainer {
	display: flex;
	align-items: center;
	gap: 1rem;
}

.primaryTitle {
	margin: 0 !important;
}

.headingText {
	font-weight: 400;
	font-size: 20px;
	margin: 0;
}

.headingSub {
	color: #888888;
}

.headingContainer {
	margin-top: 1rem;
}

.cardListContainer {
	display: flex;
	margin-top: 0.8rem;
}

.cardListContainer > div:not(:last-child) {
	margin-right: 1.5rem;
}

.dataTable {
	width: 100%;
	margin-top: 0.8rem;

	border-collapse: collapse;
	table-layout: fixed;
	word-break: break-all;
	width: 100%;
	height: max-content;
}

.dataTable thead {
	width: 100%;
	position: sticky;
	top: 0;
	background: #1D1B1B;
}

.dataTable thead th { 
	text-align: left;
	font-weight: 400;
}

.smallHeading {
	width: 120px;
}

.dataTable tr {
	background-color: #272525;
	height: 2rem;
}

.evenRow {
	background-color: #211F1F !important;
}

.tableContainer {
	display: flex;
	flex: 1 1 0;
	overflow-y: scroll;
	margin-bottom: 1rem;
}

.dataContainer {
	display: flex;
	flex-direction: column;
}
</style>

<script>
export default {
	data() {
		return {
			"test" : [1,2],
		}
	},
	mounted() {
		console.log("mounted")
		// fetch('/allmovies').then(data => data.json()).then(data => console.log(data))
	}
}

</script>