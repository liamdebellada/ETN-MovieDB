<template>
	<div class="recentCardParent">
		<div class="recentCardInfo">
			<span>Action, Adventure, lole 123</span>
			<span>Captain Marvel</span>
		</div>
		<div class="recentMenuContainer">
			<span class="material-icons">menu</span>
		</div>
	</div>
</template>

<style>
.recentCardParent {
	display: grid;
	grid-template-columns: 1fr 50px;
	height: 8rem;
	width: 13rem;
	background: #272525;
	border-radius: 14px;
}

.recentCardInfo {
	display: flex;
	flex-direction: column;
	overflow: hidden;
	justify-content: center;
	padding-left: 1rem;
}

.recentCardInfo span:nth-child(1) {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	color: #888888;
}

.recentCardInfo span:nth-child(2) {
	font-size: 1.3rem;
}

.recentMenuContainer {
	display: flex;
	justify-content: center;
	padding-top: 1rem
}
</style>