<script lang="ts">
	import { page } from '$app/stores';
	import { language } from '$lib/stores/language';

	import Logo from '$lib/components/Logo.svelte';
	import ChevronLeft from 'lucide-svelte/icons/chevron-left';
	import House from 'lucide-svelte/icons/house';
	import Button from '$lib/components/ui/button/button.svelte';

	let errorStatus: number;
	let errorMessage: string;

	$: errorStatus = $page.status || 500;
	$: errorMessage = $page.error?.message || 'An unexpected error occurred.';
</script>

<div
	class="absolute inset-0 flex h-dvh w-full flex-col items-center justify-center bg-gradient-to-b from-white to-blue-200 p-6 text-center dark:from-blue-800 dark:to-blue-950"
>
	<div class="mb-8 w-1/2 max-w-lg drop-shadow-xl md:max-w-lg">
		<Logo class="fill-current text-red-700 dark:text-red-400" />
	</div>

	<div
		class="w-full max-w-lg transform rounded-lg bg-background/25 p-10 text-foreground shadow-xl backdrop-blur-lg transition-transform hover:scale-105 hover:shadow-2xl"
	>
		<h1 class="mb-6 text-5xl font-extrabold text-red-700 dark:text-red-400">{errorStatus}</h1>
		<p class="mb-8 text-xl font-medium">{errorMessage}</p>

		<div class="flex flex-row justify-center space-x-6">
			<Button
				on:click={() => history.back()}
				variant="ghost"
				size="icon"
				class="shrink-0 hover:bg-blue-200 dark:hover:bg-blue-900"
			>
				<ChevronLeft class="h-6 w-6" />
			</Button>
			<span class="sr-only">{$language === 'ru' ? 'Назад' : 'Go back'}</span>
			<Button
				variant="ghost"
				size="icon"
				class="shrink-0 hover:bg-blue-200 dark:hover:bg-blue-900"
				href="/"
			>
				<House class="h-6 w-6" />
			</Button>
			<span class="sr-only">{$language === 'ru' ? 'На главную' : 'Home'}</span>
		</div>
	</div>
</div>
