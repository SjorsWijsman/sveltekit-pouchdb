import { remoteDB } from '$lib/db';

export async function load({ params }) {
	const { id } = params;

	return {
		post: await remoteDB.get(id)
	};
}
