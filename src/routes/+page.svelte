<script>
	import AddTodo from '$lib/components/AddTodo.svelte';
	import Todos from '$lib/components/Todos.svelte';
	import { db } from '$lib/db';
	import { todos } from '$lib/store';

	function updateTodos() {
		db.allDocs({ include_docs: true, descending: true }, function (err, doc) {
			if (doc) $todos = doc.rows;
		});
	}

	updateTodos();

	db.changes({
		since: 'now',
		live: true
	}).on('change', updateTodos);
</script>

<AddTodo />
<Todos />
