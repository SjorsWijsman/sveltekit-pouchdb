<script>
	export let post;
</script>

<li>
	<a href="/{post.doc._id}" rel="prefetch">
		<h3>{post.doc.title}</h3>
		<p>{post.doc.content}</p>
	</a>
</li>

<style>
	li * {
		color: var(--color-white);
	}

	li {
		display: flex;
		align-items: center;
		margin-bottom: 1rem;
	}

	a {
		transition: all 0.1s ease-out;
		background-color: var(--color-black);
		text-decoration: none;
		width: 100%;
		padding: 1.5rem 1rem;
		border-radius: 0.3rem;
		border-left: 0.3rem solid var(--color-white);
	}

	a:hover,
	a:focus {
		text-decoration: underline;
		padding-left: 1.2rem;
	}

	h3,
	p {
		margin: 0;
		max-width: 100%;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	h3 {
		margin-bottom: 0.2rem;
	}
</style>
