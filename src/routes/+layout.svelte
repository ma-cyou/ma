<script lang="ts">
	import '../app.scss';
	import ThemeSwitcher from '../components/ThemeSwitcher.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		console.log('Layout mounted');
	});
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<link rel="icon" type="image/png" href="/favicon.png" media="(prefers-color-scheme: light)" />
	<link
		rel="icon"
		type="image/png"
		href="/favicon-light.png"
		media="(prefers-color-scheme: dark)"
	/>
	<link rel="shortcut icon" href="/favicon.ico" media="(prefers-color-scheme: light)" />
	<link rel="shortcut icon" href="/favicon-light.ico" media="(prefers-color-scheme: dark)" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link
		rel="icon"
		type="image/png"
		sizes="32x32"
		href="/favicon-32x32.png"
		media="(prefers-color-scheme: light)"
	/>
	<link
		rel="icon"
		type="image/png"
		sizes="32x32"
		href="/favicon-32x32-light.png"
		media="(prefers-color-scheme: dark)"
	/>
	<link
		rel="icon"
		type="image/png"
		sizes="16x16"
		href="/favicon-16x16.png"
		media="(prefers-color-scheme: light)"
	/>
	<link
		rel="icon"
		type="image/png"
		sizes="16x16"
		href="/favicon-16x16-light.png"
		media="(prefers-color-scheme: dark)"
	/>
	<link rel="manifest" href="/site.webmanifest" media="(prefers-color-scheme: light)" />
	<link rel="manifest" href="/site-light.webmanifest" media="(prefers-color-scheme: dark)" />
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2d89ef" />
	<meta name="apple-mobile-web-app-title" content="macyou" />
	<meta name="application-name" content="macyou" />
	<meta name="msapplication-TileColor" content="#2d89ef" />
	<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
	<meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
	<title>macyou</title>
</svelte:head>

<ThemeSwitcher />
<slot></slot>
