<script>
	import { enhance } from '$app/forms';

	let inputValue;
</script>

<form action="/api/add-post" use:enhance>
	<input type="text" name="title" bind:value={inputValue} />
	<button disabled={!inputValue}>Add Todo</button>
</form>
