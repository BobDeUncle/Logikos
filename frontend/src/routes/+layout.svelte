<script lang="ts">
	import './layout.css';
	import '@fontsource/raleway';
	import favicon from '$lib/assets/favicon.svg';
	import Header from './Header.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="app">
	<Header />

	{@render children()}
</div>

<style>
	:global(body) {
		background-color: var(--color-primary-500);
	}

	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
