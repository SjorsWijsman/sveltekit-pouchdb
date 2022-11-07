<script>
	import { enhance } from '$app/forms';
	import AddPost from '$lib/components/AddPost.svelte';

	export let data;
</script>

<h1>Posts</h1>
<AddPost />
{#if data?.posts?.rows}
	<ul>
		{#each data?.posts?.rows as post}
			<li>
				<form method="POST" action="/api/delete-post" use:enhance>
					<input type="hidden" id="post" name="post" value={JSON.stringify(post.doc)} />
					<button type="submit" value="x">x</button>
				</form>
				<a href="/{post.doc._id}" rel="prefetch">{post.doc.title}</a>
			</li>
		{:else}
			<p>You have not made any posts</p>
		{/each}
	</ul>
{:else}
	<p>Loading posts...</p>
{/if}

<style>
	ul {
		padding-left: 0;
	}

	li {
		display: flex;
		align-items: center;
	}

	button {
		margin-right: 1rem;
	}
</style>
