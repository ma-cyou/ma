<script context="module" lang="ts">
	import { error } from '@sveltejs/kit';
	import { page } from '$app/stores';

	const usernames = ['john', 'jane', 'alice'];
	const username = page.params.username;

	if (!usernames.includes(username)) {
		throw error(404, `Page: "${username}" not found`);
	}
</script>

<h1>Hello {username}!</h1>
