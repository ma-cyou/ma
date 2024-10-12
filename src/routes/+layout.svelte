<script lang="ts">
	import { onMount } from 'svelte';

	import Header from '$lib/components/Header.svelte';

	import '@/app.scss';

	onMount(() => {
		console.log('Layout mounted');
	});
</script>

<Header />
<div
	class="h-[calc(100%_-_3.5rem)] min-h-[calc(100dvh_-_3.5rem)] w-full md:h-[calc(100%_-_4rem)] md:min-h-[calc(100dvh_-_4rem)]"
>
	<slot />
</div>
