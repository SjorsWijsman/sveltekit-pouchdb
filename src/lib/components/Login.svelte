<script>
	import { admin } from '$lib/store';
</script>

<label>
	Admin
	<input type="checkbox" name="admin" bind:checked={$admin} />
</label>

<style>
	label {
		margin-top: 0;
	}
</style>
