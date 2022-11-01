<script>
	import { db } from '$lib/db';

	let inputValue;

	function addTodo() {
		const todo = {
			_id: new Date().toISOString(),
			title: inputValue,
			completed: false
		};
		db.put(todo, (err, result) => {
			if (!err) {
				console.log('Successfully posted a todo!');
			}
		});
	}
</script>

<form action="">
	<input type="text" bind:value={inputValue} />
	<button on:click|preventDefault={() => addTodo()} disabled={!inputValue}>Add Todo</button>
</form>
