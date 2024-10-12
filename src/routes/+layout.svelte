<script lang="ts">
	import { onMount } from 'svelte';

	import Head from '$lib/components/Head.svelte';
	import Header from '$lib/components/Header.svelte';

	import '@/app.scss';

	onMount(() => {
		console.log('Layout mounted');
	});
</script>

<Head />

<Header />

<slot></slot>
