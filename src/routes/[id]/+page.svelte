<script>
	import { page } from '$app/stores';
	import { localData } from '$lib/store';
	import Login from '$lib/components/Login.svelte';

	const id = $page.params.id;

	let post;

	// Update post data on change
	$: post = $localData?.posts?.rows?.filter((item) => item.id === id)[0];
</script>

<header>
	<nav>
		<a href="/"> {'<'} Back </a>
		<Login />
	</nav>
</header>
<main>
	<h1>{post?.doc?.title || 'Loading...'}</h1>
	{#if post?.doc?.content}
		<p>{post.doc.content}</p>
	{/if}
</main>

<style>
	nav {
		width: 25rem;
		display: flex;
		justify-content: space-between;
	}
</style>
