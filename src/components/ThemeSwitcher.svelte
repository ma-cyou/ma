<script lang="ts">
	import { theme } from '../stores/theme';

	const toggleTheme = () => {
		theme.update((t) => (t === 'light' ? 'dark' : 'light'));
	};
</script>

<button
	on:click={toggleTheme}
	class="rounded bg-gray-200 p-2 text-black hover:bg-gray-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
>
	Switch to {$theme === 'light' ? 'dark' : 'light'} mode
</button>
