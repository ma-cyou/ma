<script lang="ts">
	export let ifTheme: boolean = true;
	export let title: string = 'macyou';
	export let description: string = "Mapagmataas' website";
	export let keywords: string = 'ma, cyou, macyou, mapagmataas, ma-cyou, ma.cyou';
	export let author: string = 'Mapagmataas';
	export let ifOg: boolean = true;
	export let url: string = 'https://ma.cyou';

	$: light = ifTheme ? '-light' : '';
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<!-- Favicon -->
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<link rel="icon" type="image/png" href="/favicon.png" media="(prefers-color-scheme: light)" />
	<link
		rel="icon"
		type="image/png"
		href="/favicon{light}.png"
		media="(prefers-color-scheme: dark)"
	/>
	<link rel="shortcut icon" href="/favicon.ico" media="(prefers-color-scheme: light)" />
	<link rel="shortcut icon" href="/favicon{light}.ico" media="(prefers-color-scheme: dark)" />
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
		href="/favicon-32x32{light}.png"
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
		href="/favicon-16x16{light}.png"
		media="(prefers-color-scheme: dark)"
	/>
	<link rel="manifest" href="/site.webmanifest" media="(prefers-color-scheme: light)" />
	<link rel="manifest" href="/site{light}.webmanifest" media="(prefers-color-scheme: dark)" />
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2d89ef" />
	<meta name="apple-mobile-web-app-title" content="macyou" />
	<meta name="application-name" content="macyou" />
	<meta name="msapplication-TileColor" content="#2d89ef" />
	<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
	<meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />

	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

	<!-- Name and Description Tags -->
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<meta name="author" content={author} />
	<meta name="robots" content="index, follow" />

	<link rel="canonical" href={url} />

	{#if ifOg}
		<!-- OpenGraph Meta Tags -->
		<meta property="og:title" content={title} />
		<meta property="og:description" content={description} />
		<meta property="og:image" content="https://og-examples.vercel.sh/api/static" />
		<meta property="og:url" content={url} />
		<meta property="og:type" content="website" />
		<meta property="og:site_name" content={title} />
		<meta property="og:image:alt" content="OpenGraph Image" />

		<!-- Twitter Meta Tags -->
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:site" content={'@' + author} />
		<meta name="twitter:title" content={title} />
		<meta name="twitter:description" content={description} />
		<meta name="twitter:image" content="https://og-examples.vercel.sh/api/static" />

		<!-- Preload OpenGraph Image -->
		<link rel="preload" href="/og-image.png" as="image" />
	{/if}

	<!-- Cookie Consent -->
	<script>
		(function () {
			function getCookie(name) {
				const nameEQ = name + '=';
				const ca = document.cookie.split(';');
				for (let i = 0; i < ca.length; i++) {
					let c = ca[i].trim();
					if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
				}
				return null;
			}

			const savedTheme = getCookie('theme');
			const savedLanguage = getCookie('language');

			if (savedTheme) {
				document.documentElement.classList.toggle('dark', savedTheme === 'dark');
			} else {
				const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
				document.documentElement.classList.toggle('dark', prefersDarkScheme);
			}

			if (savedLanguage) {
				document.documentElement.setAttribute('lang', savedLanguage);
			} else {
				const browserLanguage = navigator.language.startsWith('ru') ? 'ru' : 'en';
				document.documentElement.setAttribute('lang', browserLanguage);
			}
		})();
	</script>
</svelte:head>
