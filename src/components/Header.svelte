<script lang="ts">
	import Menu from 'lucide-svelte/icons/menu';
	import { Cog } from 'lucide-svelte';
	import CircleUser from 'lucide-svelte/icons/circle-user';

	import { Button } from '$lib/components/ui/button/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import * as Sheet from '$lib/components/ui/sheet/index.js';

	import defaultLogo from './Logo.svelte';
	import LanguageSwitcher from './LanguageSwitcher.svelte';
	import ThemeSwitcher from './ThemeSwitcher.svelte';
	import { language } from '../stores/language';

	export const navLinks: { name: string; nameRu: string; href: string; active: boolean }[] = [
		{ name: 'Home', nameRu: 'Главная', href: '/', active: true }
	];
	export const settings: { name: string; nameRu: string; component: typeof ThemeSwitcher }[] = [
		{ name: 'Lang', nameRu: 'Язык', component: LanguageSwitcher },
		{ name: 'Theme', nameRu: 'Тема', component: ThemeSwitcher }
	];
	export const user: string | null = null;
	export const Logo = defaultLogo;
	export const title = 'macyou';
</script>

<header class="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
	<nav
		class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"
	>
		<a href="https://ma.cyou" class="flex items-center gap-2 text-lg font-semibold md:text-base">
			<Logo class="h-6 w-6 fill-current text-black dark:text-white" />
			<span>{title}</span>
		</a>
		{#each navLinks as link}
			<a
				href={link.href}
				class="{link.active
					? 'text-foreground'
					: 'text-muted-foreground'} transition-colors hover:text-foreground"
			>
				{$language === 'ru' ? link.nameRu : link.name}
			</a>
		{/each}
	</nav>
	<Sheet.Root>
		<Sheet.Trigger asChild let:builder>
			<Button variant="outline" size="icon" class="shrink-0 md:hidden" builders={[builder]}>
				<Menu class="h-5 w-5" />
				<span class="sr-only"
					>{$language === 'ru' ? 'Показать меню навигации' : 'Toggle navigation menu'}</span
				>
			</Button>
		</Sheet.Trigger>
		<Sheet.Content side="left">
			<nav class="grid gap-6 text-lg font-medium">
				<a
					href="https://ma.cyou"
					class="flex items-center gap-2 text-lg font-semibold md:text-base"
				>
					<Logo class="h-6 w-6 fill-current text-black dark:text-white" />
					<span>macyou</span>
				</a>
				{#each navLinks as link}
					<a
						href={link.href}
						class="{link.active
							? 'text-foreground'
							: 'text-muted-foreground'} transition-colors hover:text-foreground"
					>
						{$language === 'ru' ? link.nameRu : link.name}
					</a>
				{/each}
			</nav>
		</Sheet.Content>
	</Sheet.Root>
	{#if settings.length > 0 || user !== null}
		<div class="ml-auto flex items-end items-center gap-4 md:gap-2 lg:gap-4">
			{#if settings.length > 0}
				<DropdownMenu.Root>
					<DropdownMenu.Trigger asChild let:builder>
						<Button builders={[builder]} variant="secondary" size="icon" class="rounded-full">
							<Cog class="h-5 w-5" />
							<span class="sr-only"
								>{$language === 'ru' ? 'Показать меню настроек' : 'Toggle settings menu'}</span
							>
						</Button>
					</DropdownMenu.Trigger>
					<DropdownMenu.Content align="end">
						<DropdownMenu.Label class="text-center text-sm font-semibold"
							>{$language === 'ru' ? 'Настройки' : 'Settings'}</DropdownMenu.Label
						>
						<DropdownMenu.Separator />
						{#each settings as setting}
							<DropdownMenu.Item
								class="flex w-full items-center justify-center gap-4 md:gap-2 lg:gap-4"
							>
								<button
									type="button"
									on:click|stopPropagation
									on:keydown={(e) => {
										if (e.key === 'Enter' || e.key === ' ') e.preventDefault();
									}}
									aria-label={$language === 'ru' ? setting.nameRu : setting.name}
								>
									{$language === 'ru' ? setting.nameRu : setting.name}:
									<setting.component />
								</button>
							</DropdownMenu.Item>
						{/each}
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			{/if}
			{#if user !== null}
				<DropdownMenu.Root>
					<DropdownMenu.Trigger asChild let:builder>
						<Button builders={[builder]} variant="secondary" size="icon" class="rounded-full">
							<CircleUser class="h-5 w-5" />
							<span class="sr-only">Toggle user menu</span>
						</Button>
					</DropdownMenu.Trigger>
					<DropdownMenu.Content align="end">
						<DropdownMenu.Label class="text-center text-sm font-semibold"
							>User Menu</DropdownMenu.Label
						>
						<DropdownMenu.Separator />
						<DropdownMenu.Item>Profile</DropdownMenu.Item>
						<DropdownMenu.Item>My Orders</DropdownMenu.Item>
						<DropdownMenu.Separator />
						<DropdownMenu.Item>Logout</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			{/if}
		</div>
	{/if}
</header>
