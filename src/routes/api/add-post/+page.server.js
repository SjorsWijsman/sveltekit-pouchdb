import { invalid } from '@sveltejs/kit';
import { uid } from 'uid/secure';
import { privateDB } from '$lib/private-db';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const id = data.get('id');
		const title = data.get('title');
		const content = data.get('content');

		const todo = {
			_id: id || uid(16),
			title,
			content
		};
		privateDB.put(todo, (err, result) => {
			console.log({ err, result });
			if (err) {
				return invalid(err.status, { title, missing: true });
			}
			return { success: true, result };
		});
	}
};
