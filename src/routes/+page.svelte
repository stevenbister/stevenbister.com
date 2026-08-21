<script lang="ts">
	import Welcome, { metadata } from '$content/welcome.md';
</script>

<svelte:head>
	<title>{metadata.title}</title>
</svelte:head>

<Welcome />
