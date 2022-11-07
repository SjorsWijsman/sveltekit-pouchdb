import { privateDB } from '$lib/private-db';
import { uid } from 'uid/secure';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const title = data.get('title');

		const todo = {
			_id: uid(16),
			title
		};
		privateDB.put(todo, (err, result) => {
			console.log(result);
			if (!err) return { success: true };
		});
	}
};
