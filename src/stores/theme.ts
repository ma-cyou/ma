import { writable } from 'svelte/store';

const getInitialTheme = () => {
	if (typeof window !== 'undefined') {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			return savedTheme;
		}

		const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
		return prefersDarkScheme ? 'dark' : 'light';
	}
	console.log('no window');

	return 'light';
};

export const theme = writable<string>(getInitialTheme());

theme.subscribe((value) => {
	if (typeof window !== 'undefined') {
		localStorage.setItem('theme', value);
		document.documentElement.classList.toggle('dark', value === 'dark');
	}
});
