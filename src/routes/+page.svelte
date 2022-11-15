<script>
	import { localData, admin } from '$lib/store';
	import AddPost from '$lib/components/AddPost.svelte';
	import PostItem from '$lib/components/PostItem.svelte';
	import ImportDatabase from '../lib/components/ImportDatabase.svelte';
	import ExportDatabase from '$lib/components/ExportDatabase.svelte';
	import DeleteLocalDatabase from '$lib/components/DeleteLocalDatabase.svelte';
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
				<PostItem {post} />
			{:else}
				<p>You have not made any posts</p>
			{/each}
		</ul>
	{:else}
		<p>Loading posts...</p>
	{/if}
</main>
<footer>
	<div>
		<ExportDatabase />
		<ImportDatabase />
		<DeleteLocalDatabase />
	</div>
</footer>

<style>
	ul {
		padding-left: 0;
	}

	footer div {
		display: flex;
		justify-content: space-between;
		width: var(--width-max);
	}
</style>
