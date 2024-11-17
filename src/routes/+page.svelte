<script lang="ts">
	import { Button } from '$shared/components/ui/button/index.js';
	import { language } from '$shared/stores/language';
	import * as Alert from '$shared/components/ui/alert/index.js';
	import Rocket from 'svelte-radix/Rocket.svelte';
	import ExclamationTriangle from 'svelte-radix/ExclamationTriangle.svelte';
</script>

<div
	class="fixed bottom-4 right-4 flex w-full max-w-sm flex-col-reverse -space-y-12 space-y-reverse transition-all duration-300 ease-in-out hover:space-y-1 hover:space-y-reverse"
>
	<Alert.Root>
		<Rocket class="size-4" />
		<Alert.Title>Default Alert 1</Alert.Title>
		<Alert.Description>You can add components to your app using the cli.</Alert.Description>
	</Alert.Root>
	<Alert.Root>
		<Rocket class="size-4" />
		<Alert.Title>Default Alert 2</Alert.Title>
		<Alert.Description>You can add components to your app using the cli.</Alert.Description>
	</Alert.Root>
	<Alert.Root variant="destructive" class="bg-background">
		<ExclamationTriangle class="size-4" />
		<Alert.Title>Error Altert</Alert.Title>
		<Alert.Description>Your session has expired. Please login again.</Alert.Description>
	</Alert.Root>
	<Alert.Root>
		<Rocket class="size-4" />
		<Alert.Title>Default Alert 3</Alert.Title>
		<Alert.Description>You can add components to your app using the cli.</Alert.Description>
	</Alert.Root>
</div>

<div
	class="mx-auto flex min-h-[calc(100dvh_-_3.5rem)] w-full flex-col items-center justify-center bg-gradient-to-br from-white to-sky-200 px-1 dark:from-sky-800 dark:to-black md:min-h-[calc(100dvh_-_4rem)]"
>
	<Button variant="outline" href="https://ma.cyou" class="mb-4"
		>{$language === 'ru' ? 'Основной сайт автора' : "Author's main site"}</Button
	>
	<Button variant="outline" href="/og"
		>{$language === 'ru' ? 'Создать OG картинку' : 'Create OG image'}</Button
	>
</div>
