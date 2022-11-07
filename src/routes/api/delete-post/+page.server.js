import { privateDB } from '$lib/private-db';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const post = JSON.parse(data.get('post'));
		if (post) {
			privateDB.remove(post, (err, result) => {
				console.log(result);
				if (!err) return { success: true };
			});
		}
	}
};
