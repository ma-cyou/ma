<script lang="ts">
	import { onMount } from 'svelte';

	import Header from '$lib/components/Header.svelte';

	import '@/app.scss';

	onMount(() => {
		console.log('Layout mounted');
	});
</script>

<Header />

<slot></slot>
