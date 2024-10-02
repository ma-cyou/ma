<script lang="ts">
	import { page } from '$app/stores';

	let errorStatus: number;
	let errorMessage: string;

	$: errorStatus = $page.status || 500;
	$: errorMessage = $page.error?.message || 'An unexpected error occurred.';
</script>

<div
	class="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 p-6 text-center"
>
	<!-- Decorative Background Shapes -->
	<div
		class="animate-blob absolute left-0 top-10 h-40 w-40 rounded-full bg-blue-200 opacity-30 mix-blend-multiply blur-xl filter animate-pulse"
	></div>
	<div
		class="animate-blob absolute bottom-20 right-10 h-40 w-40 rounded-full bg-yellow-200 opacity-30 mix-blend-multiply blur-xl filter animate-pulse"
	></div>
	<div
		class="animate-blob absolute right-40 top-40 h-40 w-40 rounded-full bg-pink-200 opacity-30 mix-blend-multiply blur-xl filter animate-pulse"
	></div>

	<!-- Logo Section -->
	<div class="w-full max-w-56 md:max-w-lg mb-8 opacity-75 drop-shadow-xl">
		<img src="/favicon.svg" alt="Logo" class="w-full object-contain" />
	</div>

	<!-- Error Message Section -->
	<div
		class="w-full max-w-lg transform rounded-lg bg-white bg-opacity-50 p-10 text-gray-800 shadow-xl backdrop-blur-lg transition-transform hover:scale-105 hover:shadow-2xl"
	>
		<h1 class="mb-6 text-5xl font-extrabold text-red-600">{errorStatus}</h1>
		<p class="mb-8 text-xl font-medium">{errorMessage}</p>

		<div class="flex flex-col justify-center space-y-4 md:flex-row md:space-x-6 md:space-y-0">
			<button
				on:click={() => history.back()}
				class="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition-colors duration-300 ease-in-out hover:bg-blue-700 hover:shadow-xl"
			>
				Go Back
			</button>
			<a
				href="/"
				class="rounded-lg bg-gray-300 px-6 py-3 font-semibold text-gray-900 shadow-lg transition-colors duration-300 ease-in-out hover:bg-gray-400 hover:shadow-xl"
			>
				Go to Homepage
			</a>
		</div>
	</div>
</div>

<style>
	@keyframes blob {
		0%,
		100% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(20px);
		}
	}
	.animate-blob {
		animation: blob 6s infinite;
	}
</style>
