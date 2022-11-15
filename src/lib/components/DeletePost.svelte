<script>
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { localDB } from '$lib/db';

	export let post;

	let buttonText = 'Delete Post';
</script>

<form
	method="POST"
	action="/api/delete-post"
	use:enhance={() => {
		buttonText = 'Deleting...';
		return (response) => {
			localDB.remove(post.doc);
			goto(`/`, true);

			// switch (response.result.type) {
			// 	case 'failure':
			// 	case 'error':
			// 		buttonText = 'Offline';
			// 		setTimeout(() => (buttonText = 'Delete Post'), 3000);
			// 		break;
			// 	case 'success':
			// 		buttonText = 'Deleted';
			// 		break;
			// 	default:
			// 		buttonText = 'Delete Post';
			// 		break;
			// }
		};
	}}
>
	<input type="hidden" name="post" value={JSON.stringify(post.doc)} />
	<button type="submit" class="danger">{buttonText}</button>
</form>
