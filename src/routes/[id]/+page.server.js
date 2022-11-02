import { db } from '$lib/db';

export async function load({ params }) {
	const { id } = params;

	return {
		post: await db.get(id)
	};
}
