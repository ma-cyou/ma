<script lang="ts">
	import HoverCard from '$lib/components/HoverCard.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { language } from '$lib/stores/language';
</script>

<div
	class="w-full snap-y snap-mandatory justify-center overflow-y-scroll scroll-smooth bg-gradient-to-br from-white to-blue-200 dark:from-blue-800 dark:to-blue-950"
>
	<section id="hero" class="flex snap-start items-center justify-center">
		<div class="text-center">
			<h1 class="flex text-4xl font-bold md:text-5xl">
				{#if $language === 'ru'}
					Привет <p class="hover:scale-110">👋</p>
					, я автор
				{:else}
					Hi <p class="hover:scale-110">👋</p>
					, I am the author
				{/if}
			</h1>
			<p class="mt-5 text-base md:text-lg">
				{$language === 'ru' ? 'Веб-разработчик и дизайнер' : 'Web developer and designer'}
			</p>
			<img
				src="/author-photo.jpeg"
				alt="Фото автора"
				class="aspect-0.75 mx-auto mt-10 flex min-h-48 w-48 items-center justify-center rounded-xl bg-foreground/10 shadow-xl transition-transform hover:scale-105 md:w-96"
			/>
			<Button
				href="#about"
				variant="default"
				class="mt-12 min-w-48 font-semibold shadow-lg hover:scale-105"
			>
				{$language === 'ru' ? 'Узнать больше' : 'Learn more'}
			</Button>
			<br />
			<Button
				href="#contact"
				variant="default"
				class="mt-6 min-w-48 font-semibold shadow-lg hover:scale-105"
			>
				{$language === 'ru' ? 'Связаться со мной' : 'Contact me'}
			</Button>
		</div>
	</section>
	<section
		id="about"
		class="text-s flex snap-start flex-col items-center justify-center text-xs leading-normal tracking-tight md:text-base md:leading-relaxed md:tracking-normal"
	>
		<div class="container">
			<h1 class="scroll-m-20 text-2xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
				{$language === 'ru' ? 'Обо мне' : 'About me'}
			</h1>
			<div class="mt-0 md:mt-6">
				{#if $language === 'ru'}
					<ul class="my-4 ml-3 list-disc space-y-2 md:my-8 md:ml-6 md:space-y-4 [&>li]:mt-2">
						<li>
							<p>
								Меня зовут Тимофей, мой ник — "Mapagmataas". В настоящий момент я работаю в <HoverCard
									link="https://www.inp.nsk.su/"
									name="ИЯФ"
									img="https://inp.nsk.su/images/logo/OfficiallogoBINPblueClear.gif"
									fallback="ИЯФ"
									title="ИЯФ СО РАН"
									description="Институт ядерной физики имени Г. И. Будкера СО РАН"
								/> лаборантом на
								<a href="https://ru.wikipedia.org/wiki/ВЭПП-2000" target="_blank"
									>коллайдере частиц</a
								>. Основное направление моей деятельности —
								<a href="https://wikipedia.org/wiki/Solution_stack#Full-stack_developer"
									>full stack</a
								> разработка веб-сайтов для управления данными, приборами и различными системами.
							</p>
						</li>
						<li>
							<p>
								Я увлекаюсь веб-дизайном и front-end разработкой, постоянно нахожу новые решения и
								стремлюсь узнавать что-то новое, и не побоюсь сказать, что уверен в своих знаниях <a
									href="https://wikipedia.org/wiki/HTML"
									target="_blank">HTML</a
								>, <a href="https://wikipedia.org/wiki/CSS" target="_blank">CSS</a>,
								<a href="https://wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a>/<a
									href="https://wikipedia.org/wiki/TypeScript"
									target="_blank">TypeScript</a
								>, в моем любимом фреймворке <HoverCard
									link="https://svelte.dev/"
									name="Svelte"
									img="https://github.com/sveltejs.png"
									fallback="SK"
									title="SVELTE"
									description="Кибернетически улучшенные веб-приложения."
								/>, а также <HoverCard
									link="https://react.dev/"
									name="React"
									img="https://github.com/reactjs.png"
									fallback="RC"
									title="React"
									description="Библиотека для создания пользовательских интерфейсов."
								/>. Меня также привлекает мир разработки игр, и я горю желанием попробовать себя в
								<a href="https://wikipedia.org/wiki/Video_game_development" target="_blank"
									>game dev</a
								>. Я хорошо знаком с основами языков C-семейства (<a
									href="https://wikipedia.org/wiki/C_(programming_language)"
									target="_blank">C</a
								>,
								<a href="https://wikipedia.org/wiki/C_Sharp_(programming_language)" target="_blank"
									>C#</a
								>, <a href="https://wikipedia.org/wiki/C++" target="_blank">C++</a>, <HoverCard
									link="https://www.rust-lang.org/"
									name="Rust"
									img="https://github.com/rust-lang.png"
									fallback="RT"
									title="Rust"
									description="Язык, расширяющий возможности каждого для создания надежного и эффективного программного обеспечения."
								/>),
								<a href="https://wikipedia.org/wiki/Memory_management" target="_blank"
									>управлением памятью</a
								>,
								<a
									href="https://wikipedia.org/wiki/Multithreading_(computer_architecture)"
									target="_blank">многопоточностью</a
								>,
								<a
									href="https://wikipedia.org/wiki/Asynchrony_(computer_programming)"
									target="_blank">асинхронным программированием</a
								>.
							</p>
						</li>
						<li>
							<p>
								Также владею основами работы с <a
									href="https://wikipedia.org/wiki/Database"
									target="_blank">базами данных</a
								>
								— таких как
								<a href="https://wikipedia.org/wiki/PostgreSQL" target="_blank">PostgreSQL</a>,
								<a href="https://wikipedia.org/wiki/MySQL" target="_blank">MySQL</a>,
								<a href="https://wikipedia.org/wiki/SQLite" target="_blank">SQLite</a>,
								<a href="https://wikipedia.org/wiki/SQLAlchemy" target="_blank">SQLAlchemy</a>,
								<a href="https://wikipedia.org/wiki/Redis" target="_blank">Redis</a>
								и <a href="https://wikipedia.org/wiki/MongoDB" target="_blank">MongoDB</a>. Для
								повседневных задач я использую <HoverCard
									link="https://www.python.org/"
									name="Python"
									img="https://github.com/python.png"
									fallback="PY"
									title="Python"
									description="язык программирования, который позволяет работать быстро и более эффективно интегрировать программы."
								/> или <HoverCard
									link="https://go.dev/"
									name="Golang"
									img="https://github.com/golang.png"
									fallback="GO"
									title="GO"
									description="Создавайте простые, безопасные и масштабируемые программы с помощью Go."
								/>, и хорошо знаком с множеством модулей и библиотек для этих языков.
							</p>
						</li>
					</ul>
					<blockquote class="mt-6 border-l-2 border-muted-foreground pl-6 italic md:mt-10">
						Главное, что я ищу в своей работе, — это интересные задачи и профессиональный рост.
						Однако при этом я не спешу и стремлюсь к качественному развитию.
					</blockquote>
				{:else}
					<ul class="my-4 ml-3 list-disc space-y-2 md:my-8 md:ml-6 md:space-y-4 [&>li]:mt-2">
						<li>
							<p>
								My name is Timofey, and my nickname is "Mapagmataas". Currently, I work as a lab
								technician at <HoverCard
									link="https://www.inp.nsk.su/"
									name="BINP"
									img="https://inp.nsk.su/images/logo/OfficiallogoBINPblueClear.gif"
									fallback="BINP"
									title="Budker Institute of Nuclear Physics"
									description="G. I. Budker Institute of Nuclear Physics SB RAS"
								/> at a
								<a href="https://wikipedia.org/wiki/Collider" target="_blank">particle collider</a>.
								My primary area of expertise is
								<a href="https://wikipedia.org/wiki/Solution_stack#Full-stack_developer"
									>full stack</a
								> development of websites for managing data, instruments, and various systems.
							</p>
						</li>
						<li>
							<p>
								I am passionate about web design and front-end development, always looking for new
								solutions and eager to learn new things. I am confident in my knowledge of <a
									href="https://wikipedia.org/wiki/HTML"
									target="_blank">HTML</a
								>,
								<a href="https://wikipedia.org/wiki/CSS" target="_blank">CSS</a>,
								<a href="https://wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a>/<a
									href="https://wikipedia.org/wiki/TypeScript"
									target="_blank">TypeScript</a
								>, my favorite framework <HoverCard
									link="https://svelte.dev/"
									name="Svelte"
									img="https://github.com/sveltejs.png"
									fallback="SK"
									title="SVELTE"
									description="Cybernetically enhanced web apps."
								/>, and also <HoverCard
									link="https://react.dev/"
									name="React"
									img="https://github.com/reactjs.png"
									fallback="RC"
									title="React"
									description="A JavaScript library for building user interfaces."
								/>. I am also drawn to the world of game development and am eager to explore
								opportunities in
								<a href="https://wikipedia.org/wiki/Video_game_development" target="_blank"
									>game dev</a
								>. I am familiar with the basics of C-family languages (<a
									href="https://wikipedia.org/wiki/C_(programming_language)"
									target="_blank">C</a
								>,
								<a href="https://wikipedia.org/wiki/C_Sharp_(programming_language)" target="_blank"
									>C#</a
								>,
								<a href="https://wikipedia.org/wiki/C++" target="_blank">C++</a>, <HoverCard
									link="https://www.rust-lang.org/"
									name="Rust"
									img="https://github.com/rust-lang.png"
									fallback="RT"
									title="Rust"
									description="A language empowering everyone to build reliable and efficient software."
								/>),
								<a href="https://wikipedia.org/wiki/Memory_management" target="_blank"
									>memory management</a
								>,
								<a
									href="https://wikipedia.org/wiki/Multithreading_(computer_architecture)"
									target="_blank">multithreading</a
								>, and
								<a
									href="https://wikipedia.org/wiki/Asynchrony_(computer_programming)"
									target="_blank">asynchronous programming</a
								>.
							</p>
						</li>
						<li>
							<p>
								I also have a strong foundation in working with <a
									href="https://wikipedia.org/wiki/Database"
									target="_blank">databases</a
								>
								such as
								<a href="https://wikipedia.org/wiki/PostgreSQL" target="_blank">PostgreSQL</a>,
								<a href="https://wikipedia.org/wiki/MySQL" target="_blank">MySQL</a>,
								<a href="https://wikipedia.org/wiki/SQLite" target="_blank">SQLite</a>,
								<a href="https://wikipedia.org/wiki/SQLAlchemy" target="_blank">SQLAlchemy</a>,
								<a href="https://wikipedia.org/wiki/Redis" target="_blank">Redis</a>, and
								<a href="https://wikipedia.org/wiki/MongoDB" target="_blank">MongoDB</a>. For
								everyday tasks, I use <HoverCard
									link="https://www.python.org/"
									name="Python"
									img="https://github.com/python.png"
									fallback="PY"
									title="Python"
									description="A programming language that lets you work quickly and integrate systems more effectively."
								/> or <HoverCard
									link="https://go.dev/"
									name="Golang"
									img="https://github.com/golang.png"
									fallback="GO"
									title="Go"
									description="Create fast, reliable, and scalable programs with Go."
								/>, and I am well-versed in many modules and libraries for these languages.
							</p>
						</li>
					</ul>
					<blockquote class="mt-6 border-l-2 border-muted-foreground pl-6 italic md:mt-10">
						The most important thing I seek in my work is interesting challenges and professional
						growth. However, I am not in a hurry; I strive for quality development.
					</blockquote>
				{/if}
			</div>
		</div>
	</section>
	<section id="contact" class="flex snap-start flex-col items-center justify-center">
		<div class="container mx-auto text-center">
			<h2 class="text-4xl font-bold">Связаться со мной</h2>
			<form class="mt-8 space-y-4">
				<input
					type="text"
					placeholder="Ваше имя"
					class="w-full rounded-lg bg-gray-800 px-4 py-2 text-white focus:outline-none"
				/>
				<input
					type="email"
					placeholder="Ваш email"
					class="w-full rounded-lg bg-gray-800 px-4 py-2 text-white focus:outline-none"
				/>
				<textarea
					placeholder="Ваше сообщение"
					class="h-32 w-full rounded-lg bg-gray-800 px-4 py-2 text-white focus:outline-none"
				></textarea>
				<button class="w-full rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500"
					>Отправить</button
				>
			</form>
		</div>
	</section>
</div>

<style lang="scss">
	a {
		@apply underline-offset-4 hover:underline;
	}

	.snap-y,
	.snap-start {
		@apply h-[calc(100dvh_-_3.5rem)] md:h-[calc(100dvh_-_4rem)];
	}
</style>
