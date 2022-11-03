import { remoteDB } from '$lib/db';

export async function load() {
	return {
		posts: await remoteDB.allDocs({ include_docs: true, descending: true })
	};
}
