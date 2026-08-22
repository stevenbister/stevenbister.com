<script lang="ts">
	import Github from '$/lib/icons/github.svelte';
	import Linkedin from '$/lib/icons/linkedin.svelte';
	import Cv, { metadata } from '$content/cv.md';
</script>

<svelte:head>
	<title>{metadata.title}</title>
</svelte:head>

<article class="prose">
    <section>
        <a href="http://www.linkedin.com/in/steven-bister"><Linkedin />LinkedIn</a> |
    	<a href="https://github.com/stevenbister"><Github /> GitHub</a>
    </section>

	<Cv />
</article>

<style>
	.prose {
		margin-block-end: var(--size-10);
	}

	section {
		display: flex;
		align-items: center;
		gap: var(--size-2);

		a {
			display: flex;
			align-items: center;
			gap: var(--size-2);
			text-decoration: none;
		}
	}
</style>
