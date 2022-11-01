<script>
	import { db } from '$lib/db';
	import { todos } from '$lib/store';
</script>

{#if $todos}
	<ul>
		{#each $todos as todo}
			<li>
				<button on:click={() => db.remove(todo.doc)}>x</button>
				<p>{todo.doc.title}</p>
			</li>
		{:else}
			<p>You have not made any todos</p>
		{/each}
	</ul>
{:else}
	<p>Loading todos</p>
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
