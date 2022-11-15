<script>
	import { localDB } from '$lib/db';
	import { localData } from '$lib/store';

	function deleteDB() {
		localDB.destroy();
		$localData.posts.rows = [];
	}
</script>

<button on:click={deleteDB} class="danger">Delete Local DB</button>
