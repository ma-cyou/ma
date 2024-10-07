<script lang="ts">
	import { onMount } from 'svelte';

	import Head from '../components/Head.svelte';
	import Header from '../components/Header.svelte';

	import '../app.scss';

	onMount(() => {
		console.log('Layout mounted');
	});
</script>

<Head />

<Header />

<slot></slot>
