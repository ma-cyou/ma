<script lang="ts">
	import * as Select from '$lib/components/ui/select/index.js';

	import { theme as themeStore } from '$lib/stores/theme';
	import { language as languageStore } from '$lib/stores/language';
	import { onMount } from 'svelte';

	interface SelectItem {
		label: string;
		ruLabel: string;
		value: string;
	}

	const themes: SelectItem[] = [
		{ label: 'Light', ruLabel: 'Светлая', value: 'light' },
		{ label: 'Dark', ruLabel: 'Темная', value: 'dark' }
	];
	const languages: SelectItem[] = [
		{ label: 'English', ruLabel: 'Английский', value: 'en' },
		{ label: 'Russian', ruLabel: 'Русский', value: 'ru' }
	];

	$: selectedTheme = themes.find((theme) => theme.value === $themeStore) || themes[0];
	$: selectedLanguage =
		languages.find((language) => language.value === $languageStore) || languages[0];

	$: updateSelects($languageStore);

	const updateSelects = (language: string = $languageStore) => {
		const themeSelect = document.getElementById('theme-select');
		const languageSelect = document.getElementById('language-select');

		if (themeSelect) {
			themeSelect.innerHTML = language === 'ru' ? selectedTheme.ruLabel : selectedTheme.label;
		}

		if (languageSelect) {
			languageSelect.innerHTML =
				language === 'ru' ? selectedLanguage.ruLabel : selectedLanguage.label;
		}
	};

	onMount(() => {
		updateSelects();
	});
</script>

<div class="flex min-w-[240px] flex-col space-y-4 p-2 pb-4 text-sm">
	<div class="flex items-center space-x-2">
		<p>{$languageStore === 'ru' ? 'Тема:' : 'Theme:'}</p>
		<Select.Root
			selected={selectedTheme}
			onSelectedChange={(v) => {
				if (v) themeStore.set(v.value);
			}}
		>
			<Select.Trigger>
				<Select.Value
					id="theme-select"
					placeholder={$languageStore === 'ru' ? 'Выберите Тему' : 'Select Theme'}
				/>
			</Select.Trigger>
			<Select.Content>
				{#each themes as theme}
					<Select.Item value={theme.value}>
						{$languageStore === 'ru' ? theme.ruLabel : theme.label}
					</Select.Item>
				{/each}
			</Select.Content>
		</Select.Root>
	</div>
	<div class="flex items-center space-x-1">
		<p>{$languageStore === 'ru' ? 'Язык:' : 'Language:'}</p>
		<Select.Root
			selected={selectedLanguage}
			onSelectedChange={(v) => {
				if (v) languageStore.set(v.value);
			}}
		>
			<Select.Trigger>
				<Select.Value
					id="language-select"
					placeholder={$languageStore === 'ru' ? 'Выберите Язык' : 'Select Language'}
				/>
			</Select.Trigger>
			<Select.Content>
				{#each languages as lang}
					<Select.Item value={lang.value}>
						{$languageStore === 'ru' ? lang.ruLabel : lang.label}
					</Select.Item>
				{/each}
			</Select.Content>
		</Select.Root>
	</div>
</div>
