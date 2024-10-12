<script lang="ts">
	import { onMount } from 'svelte';

	import Head from '$lib/components/Head.svelte';
	import Header from '$lib/components/Header.svelte';

	import '@/app.scss';

	const navLinks: { [key: string]: { name: string; nameRu: string } } = {
		'/': { name: 'Home', nameRu: 'Главная' },
		'/docs': { name: 'Docs', nameRu: 'Документация' },
		'/settings': { name: 'Settings', nameRu: 'Настройки' }
	};

	onMount(() => {
		console.log('Layout mounted');
	});
</script>

<Head />

<Header {navLinks} />

<slot></slot>
