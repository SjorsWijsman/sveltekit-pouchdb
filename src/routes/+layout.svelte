<script>
	import { localDB, publicDB } from '$lib/db';

	export let data = {};

	// When publicDB changes
	localDB
		.sync(publicDB, {
			live: true,
			retry: true
		})
		.on('change', getPosts);

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
			data = {
				...data,
				posts: doc
			};
		});
	}

	getPosts();
</script>

<slot {data} />
