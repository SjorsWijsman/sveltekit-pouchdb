<script>
	import { enhance } from '$app/forms';
	import { localData, admin } from '$lib/store';
	import { localDB } from '$lib/db';
	import AddPost from '$lib/components/AddPost.svelte';
	import ImportDatabase from '../lib/components/ImportDatabase.svelte';
	import ExportDatabase from '$lib/components/ExportDatabase.svelte';
	import Login from '$lib/components/Login.svelte';

	// $: console.log($localData?.posts?.rows);
</script>

<header>
	<Login />
</header>
<main>
	<h1>Posts</h1>
	{#if $admin}
		<AddPost />
	{/if}
	{#if $localData?.posts?.rows !== undefined}
		<ul>
			{#each $localData?.posts?.rows as post}
				<li>
					{#if $admin}
						<!-- action="/api/delete-post" -->
						<form method="POST" action="/" use:enhance>
							<input type="hidden" id="post" name="post" value={JSON.stringify(post.doc)} />
							<button
								type="submit"
								value="x"
								on:click|preventDefault={() => localDB.remove(post.doc)}>x</button
							>
						</form>
					{/if}
					<a href="/{post.doc._id}" rel="prefetch">{post.doc.title}</a>
				</li>
			{:else}
				<p>You have not made any posts</p>
			{/each}
		</ul>
	{:else}
		<p>Loading posts...</p>
	{/if}
</main>
<footer>
	<ExportDatabase />
	<ImportDatabase />
</footer>

<style>
	ul {
		padding-left: 0;
	}

	li {
		display: flex;
		align-items: center;
		padding-bottom: 0.3rem;
	}

	button {
		margin-right: 1rem;
	}
</style>
