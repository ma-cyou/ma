<script lang="ts">
	export const ifOg: boolean = true;
	export const ifTwitter: boolean = true;
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

	<meta name="description" content="Mapagmataas' website ." />
	<meta name="keywords" content="ma, cyou, macyou, mapagmataas, ma-cyou, ma.cyou" />
	<meta name="author" content="Mapagmataas" />
	<meta name="robots" content="index, follow" />

	{#if ifOg}
		<meta property="og:title" content="Your Site Title" />
		<meta property="og:description" content="A brief description of the page for social sharing." />
		<meta property="og:image" content="/path/to/image.jpg" />
		<meta property="og:url" content="https://your-site.com" />
		<meta property="og:type" content="website" />
		<meta property="og:site_name" content="Your Site Name" />
	{/if}

	{#if ifTwitter}
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:site" content="@yourusername" />
		<meta name="twitter:title" content="Your Site Title" />
		<meta
			name="twitter:description"
			content="A brief description of the page for Twitter sharing."
		/>
		<meta name="twitter:image" content="/path/to/image.jpg" />
	{/if}

	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
</svelte:head>
