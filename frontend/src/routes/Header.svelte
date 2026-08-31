<script lang="ts">
	let {
		name
	}: {
		name: string;
	} = $props();
</script>

<h1>{name}</h1>

<style>
	h1 {
		text-align: center;
		font-size: 3rem;
		margin-top: 2rem;
	}
</style>
