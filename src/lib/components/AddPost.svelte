<script>
	import { browser } from '$app/environment';
	import { enhance } from '$app/forms';
	import { localDB } from '$lib/db';
	import { uid } from 'uid';

	let title;
	let content;
	let id = uid(16);

	let submitting = false;

	function addPost() {
		const todo = {
			_id: id,
			title,
			content
		};
		if (browser) {
			localDB.put(todo, (err, result) => {
				if (!err) {
					// regenerate new id
					id = uid(16);
					return { success: true };
				}
			});
		}
	}
</script>

<form
	method="POST"
	action="/api/add-post"
	use:enhance={() => {
		submitting = true;
		return (response) => {
			submitting = false;

			addPost();

			switch (response.result.type) {
				case 'error':
				case 'failure':
					console.log('failed to post to database, stored post locally');
					break;

				case 'success':
					console.log('succesfully posted to database');
			}
		};
	}}
>
	<input type="hidden" name="id" bind:value={id} />
	<label>
		<span>Title</span>
		<input type="text" name="title" bind:value={title} required />
	</label>
	<label>
		<span>Content</span>
		<textarea type="text" name="content" bind:value={content} required />
	</label>
	<button disabled={!title || !content || submitting}>
		{submitting ? 'Submitting...' : 'Add Post'}
	</button>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		width: 100%;
		gap: 0.5rem;
		background-color: var(--color-black);
		padding: 1.5rem 1.3rem;
		border-radius: 0.3rem;
	}

	input,
	textarea {
		min-height: 2rem;
		max-height: 20rem;
		width: 100%;
		resize: vertical;
	}
</style>
