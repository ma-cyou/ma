<script lang="ts">
	import { page } from '$app/stores';

	let username: string | undefined;
	$: username = $page.params.username;
</script>

<h1>Hello {username ? username : 'Loading...'}!</h1>
