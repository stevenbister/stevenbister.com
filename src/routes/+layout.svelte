<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { onNavigate } from '$app/navigation';
	import Header from '$/lib/components/header.svelte';
	import '$styles/main.css';

	let { children } = $props();

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main class="container">
	<Header />

	{@render children()}
</main>

<style>
	main {
		margin-block: auto;
	}
</style>
