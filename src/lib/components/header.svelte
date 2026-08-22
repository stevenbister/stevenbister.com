<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';

	let isHome = $derived(page.url.pathname === '/');
</script>

<header class:home={isHome}>
	<h1>
		{#if isHome}
			<span class="decorative"> Steven Bister </span>
		{:else}
			<a href={resolve('/')}> Steven Bister </a>
		{/if}
	</h1>
</header>

<style>
	header {
		padding-block: var(--size-4);
		display: flex;

		&.home {
			width: fit-content;
			margin-inline: auto;
		}

		&.home h1 {
			font-size: clamp(2.5rem, 9vw, 9.5rem);
		}
	}

	h1 {
		display: inline-block;
		font-family: 'Cairo Play', serif;
		font-weight: 900;
		transition: transform 1s;
		view-transition-name: title;

		a {
			text-decoration: none;
			color: inherit;
		}
	}

	::view-transition-group(title) {
		animation-duration: var(--duration-gentle-2);
	}

	::view-transition-old(title),
	::view-transition-new(title) {
		mix-blend-mode: normal;
		opacity: 1;
	}

	::view-transition-new(title) {
		animation: none;
	}

	::view-transition-old(title) {
		display: none;
	}
</style>
