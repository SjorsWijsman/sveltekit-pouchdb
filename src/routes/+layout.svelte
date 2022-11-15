<script>
	import { browser } from '$app/environment';
	import { localDB, publicDB } from '$lib/db';
	import { localData, admin } from '$lib/store';

	// Data gets retrieved from server from publicDB
	export let data;

	// Load publicDB retrieved from server into localDB
	if (data?.posts?.rows && browser) {
		localDB.bulkDocs(
			data?.posts?.rows?.map((item) => item?.doc),
			{ new_edits: false } // not change revision
			// (...args) => console.log('DONE', args)
		);
	}

	// Get posts in localDB & add to localData store
	function getPosts() {
		localDB.allDocs({ include_docs: true, descending: true }, (err, doc) => {
			$localData = {
				posts: doc
			};
		});
	}

	// On first load
	if (browser) {
		getPosts();
	}

	// When localDB changes
	if (browser) {
		localDB
			.changes({
				since: 'now',
				live: true
			})
			.on('change', getPosts);
	}

	admin.subscribe((loggedIn) => {
		if (loggedIn) localDB.replicate.to(publicDB);
	});
</script>

<slot />
