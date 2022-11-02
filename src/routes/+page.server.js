import { db } from '$lib/db';

export async function load() {
	return {
		posts: await db.allDocs({ include_docs: true, descending: true })
	};
}
