<script>
	import { enhance } from '$app/forms';
	import { localDB } from '$lib/db';
	import { uid } from 'uid';

	let title;
	let content;

	function addPost() {
		const todo = {
			_id: uid(16),
			title,
			content
		};
		localDB.put(todo, (err, result) => {
			console.log(result);
			if (!err) {
				return { success: true };
			}
		});
	}
</script>

<!-- action = "/api/add-post", remove preventDefault -->
<form method="POST" action="/" use:enhance>
	<label>
		<span>Title</span>
		<input type="text" name="title" bind:value={title} />
	</label>
	<label>
		<span>Content</span>
		<textarea type="text" name="content" bind:value={content} />
	</label>
	<button disabled={!title || !content} on:click|preventDefault={addPost}>Add Post</button>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		width: 100%;
		gap: 0.5rem;
		padding-bottom: 1rem;
	}

	input,
	textarea {
		min-height: 2rem;
		width: 100%;
		resize: vertical;
	}
</style>
