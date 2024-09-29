<script lang="ts">
	import { page } from '$app/stores';

	let errorStatus: number;
	let errorMessage: string;

	$: errorStatus = $page.status || 500;
	$: errorMessage = $page.error?.message || 'An unexpected error occurred.';
</script>

<div class="error-page">
	<h1>{errorStatus}</h1>
	<p>{errorMessage}</p>
	<a href="/">Go back to the homepage</a>
</div>
