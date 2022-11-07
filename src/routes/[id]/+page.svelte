<script>
	import { page } from '$app/stores';
	export let data;

	const id = $page.params.id;
	const post = data?.posts?.rows?.filter((item) => item.id === id)[0];
</script>

<a href="/"> {'<'} Back </a>
<h1>{post?.doc?.title}</h1>
