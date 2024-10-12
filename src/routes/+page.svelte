<script lang="ts">
	import { language } from '$lib/stores/language';
</script>

<div class="flex h-full w-full flex-col items-center justify-center px-4 py-16">
	<h1 class="text-4xl font-bold">
		{$language === 'ru' ? 'Добро пожаловать на Главную Страницу!' : 'Welcome to the Home Page!'}
	</h1>
</div>
