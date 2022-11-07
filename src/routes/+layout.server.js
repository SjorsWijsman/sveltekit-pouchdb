import { publicDB } from '$lib/db';

export async function load() {
	return {
		posts: await publicDB.allDocs({ include_docs: true, descending: true })
	};
}
