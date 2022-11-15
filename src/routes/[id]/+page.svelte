<script>
	import { page } from '$app/stores';
	import { localData, admin } from '$lib/store';
	import Login from '$lib/components/Login.svelte';
	import DeletePost from '$lib/components/DeletePost.svelte';

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
{#if $admin}
	<footer>
		<div>
			<DeletePost {post} />
			<button>Edit Post</button>
		</div>
	</footer>
{/if}

<style>
	nav {
		width: 100%;
		max-width: 25rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	footer div {
		display: flex;
		justify-content: space-between;
		width: var(--width-max);
	}
</style>
