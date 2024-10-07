<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';

	import { language } from '../stores/language';

	const toggleMode = () => {
		language.update((lang) => (lang === 'en' ? 'ru' : 'en'));
	};
</script>

<Button on:click={toggleMode} variant="outline" size="icon">
	<p
		class="h-[1.2rem] w-[1.2rem] font-semibold transition-all {$language === 'ru'
			? 'rotate-0 scale-100'
			: '-rotate-90 scale-0'}"
	>
		Ru
	</p>
	<p
		class="absolute h-[1.2rem] w-[1.2rem] font-semibold transition-all {$language === 'ru'
			? 'rotate-90 scale-0'
			: 'rotate-0 scale-100'}"
	>
		En
	</p>
	<span class="sr-only">{$language === 'ru' ? 'Переключить язык' : 'Toggle Language'}</span>
</Button>
