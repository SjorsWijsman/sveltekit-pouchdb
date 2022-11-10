<script>
	import { localDB } from '$lib/db';
	import { localData } from '$lib/store';

	// Data gets retrieved from server from publicDB
	export let data;

	if (data) {
		localDB.bulkDocs(
			data.posts.rows.map((item) => item.doc),
			{ new_edits: false } // not change revision
			// (...args) => console.log('DONE', args)
		);
	}

	// When localDB changes
	localDB
		.changes({
			since: 'now',
			live: true
		})
		.on('change', getPosts);

	// Get posts in localDB
	function getPosts() {
		localDB.allDocs({ include_docs: true, descending: true }, (err, doc) => {
			$localData = {
				posts: doc
			};
		});
	}

	getPosts();
</script>

<slot />
