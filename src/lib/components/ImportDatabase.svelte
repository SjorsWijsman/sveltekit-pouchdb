<script>
	import { localDB } from '$lib/db';

	let inputElement;

	function importDB({
		target: {
			files: [file]
		}
	}) {
		if (file) {
			const reader = new FileReader();
			reader.onload = ({ target: { result } }) => {
				localDB.bulkDocs(
					JSON.parse(result),
					{ new_edits: false } // not change revision
					// (...args) => console.log('DONE', args)
				);
			};
			reader.readAsText(file);
		}
	}
</script>

<button on:click={() => inputElement.click()}>Import DB</button>
<input id="import-db" type="file" on:change={importDB} bind:this={inputElement} />

<style>
	#import-db {
		display: none;
	}
</style>
