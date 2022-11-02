import { db } from '$lib/db';
import { uid } from 'uid';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const title = data.get('title');

		const todo = {
			_id: uid(16),
			title
		};
		db.put(todo, (err, result) => {
			console.log(result);
			if (!err) return { success: true };
		});
	}
};
