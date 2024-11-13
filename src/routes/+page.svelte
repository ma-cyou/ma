<script lang="ts">
	import Button from '$shared/components/ui/button/button.svelte';
	import * as RadioGroup from '$shared/components/ui/radio-group/index.js';
	import { Input } from '$shared/components/ui/input/index.js';
	import { Label } from '$shared/components/ui/label/index.js';
	import Logo from '$shared/components/Logo.svelte';
	import * as Avatar from '$shared/components/ui/avatar/index.js';

	import { language } from '$shared/stores/language';
</script>

<div
	class="mx-auto flex min-h-[calc(100dvh_-_3.5rem)] w-full flex-col items-center justify-center bg-gradient-to-br from-white to-sky-200 px-1 dark:from-sky-800 dark:to-black md:min-h-[calc(100dvh_-_4rem)]"
>
	<div
		class="relative flex h-48 w-96 flex-col items-center justify-center rounded-lg bg-background"
	>
		<div class="absolute top-6 grid w-64 items-center gap-1.5">
			<Label for="subject">{$language === 'ru' ? 'Тетрадь для работ по' : 'Notebook for'}</Label>
			<Input type="text" id="subject" placeholder={$language === 'ru' ? 'Предмет' : 'Subject'} />
		</div>
		<div class="absolute bottom-14 flex items-center space-x-6">
			<Avatar.Root>
				<Avatar.Image
					src="/favicon.svg"
					alt={$language === 'ru' ? 'Анашин Тимофей' : 'Anashin Timofey'}
					class="invert dark:invert-0"
				/>
				<Avatar.Fallback>{$language === 'ru' ? 'АТ' : 'AT'}</Avatar.Fallback>
			</Avatar.Root>
			<div>
				<p class="text-sm font-medium leading-none">
					{$language === 'ru' ? 'Анашин Тимофей' : 'Anashin Timofey'}
				</p>
				<p class="text-sm italic text-muted-foreground">https://ma.cyou#socials</p>
			</div>
		</div>
		<RadioGroup.Root value="group" name="year&group" class="absolute bottom-5 flex gap-8">
			<div class="flex items-center space-x-2">
				<RadioGroup.Item value="year" id="year" />
				<Label for="year">4 {$language === 'ru' ? 'Курс' : 'Year'}</Label>
			</div>
			<div class="flex items-center space-x-2">
				<RadioGroup.Item value="group" id="group" />
				<Label for="group">{$language === 'ru' ? 'Группа' : 'Group'} ИСП-921</Label>
			</div>
		</RadioGroup.Root>
	</div>
</div>
