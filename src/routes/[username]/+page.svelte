<script lang="ts">
	import { error } from '@sveltejs/kit';
	import { page } from '$app/stores';

	const usernames = ['john', 'jane', 'alice'];

	let username: string | undefined;

	$: {
		username = $page.params.username;

		if (username && !usernames.includes(username)) {
			throw error(404, `User: "${username}" not found`);
		}
	}
</script>

<h1>Hello {username}!</h1>
