<script lang="ts">
	import './layout.css';
	import '@fontsource/raleway';
	import favicon from '$lib/assets/favicon.svg';
	import Header from './Header.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<Header />
{@render children()}

<style>
	:global(body) {
		background-color: var(--color-primary-500);
	}
</style>
