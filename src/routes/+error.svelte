<script lang="ts">
	import { page } from '$app/stores';
	import { language } from '../stores/language';
	import Logo from '../components/Logo.svelte';

	let errorStatus: number;
	let errorMessage: string;

	$: errorStatus = $page.status || 500;
	$: errorMessage = $page.error?.message || 'An unexpected error occurred.';
</script>

<div
	class="relative flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 p-6 text-center dark:from-blue-900 dark:to-blue-800"
>
	<div class="mb-8 w-1/2 max-w-lg drop-shadow-xl md:max-w-lg">
		<Logo class="fill-current text-red-600 dark:text-red-400" />
	</div>

	<div
		class="w-full max-w-lg transform rounded-lg bg-white p-10 text-gray-800 shadow-xl backdrop-blur-lg transition-transform hover:scale-105 hover:shadow-2xl dark:bg-gray-800 dark:bg-opacity-80 dark:text-white"
	>
		<h1 class="mb-6 text-5xl font-extrabold text-red-600 dark:text-red-400">{errorStatus}</h1>
		<p class="mb-8 text-xl font-medium">{errorMessage}</p>

		<div class="flex flex-col justify-center space-y-4 md:flex-row md:space-x-6 md:space-y-0">
			<button
				on:click={() => history.back()}
				class="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition-colors duration-300 ease-in-out hover:bg-blue-700 hover:shadow-xl dark:bg-blue-500 dark:hover:bg-blue-600"
			>
				{$language === 'ru' ? 'Вернуться Назад' : 'Go Back'}
			</button>
			<a
				href="/"
				class="rounded-lg bg-gray-300 px-6 py-3 font-semibold text-gray-900 shadow-lg transition-colors duration-300 ease-in-out hover:bg-gray-400 hover:shadow-xl dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
			>
				{$language === 'ru' ? 'На Главную страницу' : 'Go to Homepage'}
			</a>
		</div>
	</div>
</div>
