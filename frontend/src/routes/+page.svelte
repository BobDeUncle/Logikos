<script lang="ts">
	import '@fontsource/birthstone';
</script>

<div class="hero">
	<div class="circle"></div>
	<h1 class="font-title">Jesse Mansbridge</h1>
	<h2 class="font-navigation">Web Developer & Writer</h2>
</div>

<style>
	.hero {
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex: 1;
		margin-bottom: 10rem;
		position: relative;
	}

	.circle {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 700px;
		height: 700px;
		border-radius: 50%;
		background-color: var(--color-secondary-100);
		z-index: -1;
	}

	h1 {
		font-size: 8rem;
		text-align: center;
	}

	h2 {
		font-size: 1.8rem;
		text-align: center;
	}
</style>
