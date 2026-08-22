<script>
	import { resolve } from '$app/paths';
	import Github from '$/lib/icons/github.svelte';
	import File from '$/lib/icons/file.svelte';
	import Linkedin from '$/lib/icons/linkedin.svelte';
</script>

<svelte:head>
	<title>Steven Bister</title>
</svelte:head>

<section>
	<a href="http://www.linkedin.com/in/steven-bister"><Linkedin />LinkedIn</a> |
	<a href="https://github.com/stevenbister"><Github /> GitHub</a> |
	<a href={resolve('/cv')}><File /> CV</a>
</section>

<style>
	section {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: var(--size-2);

		a {
			display: flex;
			align-items: center;
			gap: var(--size-2);
			text-decoration: none;
			font-size: var(--font-size-3);
		}
	}
</style>
