<script lang="ts">
	import { Input } from '$shared/components/ui/input/index.js';
	import { Textarea } from '$shared/components/ui/textarea/index.js';
	import { Button } from '$shared/components/ui/button/index.js';
	import { language } from '$shared/stores/language';

	const url = 'https://api.ma.cyou/og/';
	let icon = $state('https://ma.cyou/favicon.svg');
	let title = $state('macyou');
	let description = $state(
		'This is my personal resume website, showcasing my skills, experience, and projects. It serves as a digital portfolio, providing a platform for others to learn more about my work as a developer and the journey I’ve taken. The website highlights various aspects of my career, technical expertise, and creative endeavors.'
	);
	let website = $state('https://ma.cyou/');

	let result = $derived(
		icon && title && description && website
			? encodeURI(`${url}?c=${icon}&y=${title}&o=${description}&u=${website}`)
			: url
	);
</script>

<div
	class="mx-auto flex min-h-[calc(100dvh_-_3.5rem)] w-full flex-col items-center justify-center bg-gradient-to-br from-white to-sky-200 px-1 dark:from-sky-800 dark:to-black md:min-h-[calc(100dvh_-_4rem)]"
>
	<Input
		type="url"
		id="icon"
		placeholder={$language === 'ru' ? 'Ссылка на иконку' : 'Icon link'}
		class="mb-2 bg-background"
		bind:value={icon}
	/>
	<Input
		type="text"
		id="title"
		placeholder={$language === 'ru' ? 'Заголовок' : 'Icon link'}
		class="mb-2 bg-background"
		bind:value={title}
	/>
	<Textarea
		id="description"
		placeholder={$language === 'ru' ? 'Описание' : 'Icon link'}
		class="mb-2 bg-background"
		bind:value={description}
	/>
	<Input
		type="url"
		id="website"
		placeholder={$language === 'ru' ? 'Ссылка на сайт' : 'Icon link'}
		class="mb-2 bg-background"
		bind:value={website}
	/>
	<Button
		variant="outline"
		class="mb-2 h-auto whitespace-pre-wrap break-all"
		onclick={() => navigator.clipboard.writeText(result)}
	>
		{result}
	</Button>

	<img class="m-8" src={result} alt="og" />
</div>
