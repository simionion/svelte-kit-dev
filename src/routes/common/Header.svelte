<header
	class="z-50 flex w-full flex-wrap bg-white py-3 text-sm dark:bg-slate-900 sm:flex-nowrap sm:justify-start sm:py-0"
>
	<nav
		class="relative mx-auto w-full max-w-7xl px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
		aria-label="Global"
	>
		<div class="flex items-center justify-between">
			<a
				class="flex-none text-xl font-semibold dark:text-white"
				href="#"
				aria-label="Brand">Brand</a
			>
			<div class="sm:hidden">
				<button
					type="button"
					class="hs-collapse-toggle inline-flex items-center justify-center gap-2 rounded-md border bg-white p-2 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-offset-gray-800"
					data-hs-collapse="#navbar-collapse-with-animation"
					aria-controls="navbar-collapse-with-animation"
					aria-label="Toggle navigation"
				>
					<svg
						class="h-4 w-4 hs-collapse-open:hidden"
						width="16"
						height="16"
						fill="currentColor"
						viewBox="0 0 16 16"
					>
						<path
							fill-rule="evenodd"
							d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
						/>
					</svg>
					<svg
						class="hidden h-4 w-4 hs-collapse-open:block"
						width="16"
						height="16"
						fill="currentColor"
						viewBox="0 0 16 16"
					>
						<path
							d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
						/>
					</svg>
				</button>
			</div>
		</div>
		<div
			id="navbar-collapse-with-animation"
			class="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 sm:block"
		>
			<div
				class="mt-5 flex flex-col gap-x-0 gap-y-4 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:gap-x-7 sm:gap-y-0 sm:pl-7"
			>
				<a
					class="font-semibold text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 sm:py-6"
					href="/"
					aria-current="page">Landing</a
				>
				<a
					class="font-semibold text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 sm:py-6"
					href="/welcome"
					data-sveltekit-preload-data="off">Account</a
				>
				<a
					class="font-semibold text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 sm:py-6"
					href="#">Work</a
				>
				<a
					class="font-semibold text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 sm:py-6"
					href="#">Blog</a
				>

				<div
					class="hs-dropdown [--adaptive:none] [--strategy:static] sm:py-4 sm:[--strategy:fixed] sm:[--trigger:hover]"
				>
					<button
						type="button"
						class="flex w-full items-center font-medium text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
					>
						Dropdown
						<svg
							class="ml-2 h-2.5 w-2.5 text-gray-600"
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
							></path>
						</svg>
					</button>

					<div
						class="hs-dropdown-menu top-full z-10 hidden rounded-lg bg-white p-2 opacity-0 transition-[opacity,margin] duration-[0.1ms] before:absolute before:-top-5 before:left-0 before:h-5 before:w-full hs-dropdown-open:opacity-100 dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800 sm:w-48 sm:border sm:shadow-md sm:duration-[150ms] sm:dark:border"
					>
						<a
							class="flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
							href="#"
						>
							About
						</a>
						<div
							class="hs-dropdown relative [--adaptive:none] [--strategy:static] sm:[--trigger:hover] sm:[--strategy:absolute]"
						>
							<button
								type="button"
								class="flex w-full w-full items-center justify-between rounded-md px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
							>
								Sub Menu
								<svg
									class="ml-2 h-2.5 w-2.5 text-gray-600 sm:-rotate-90"
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
									></path>
								</svg>
							</button>

							<div
								class="hs-dropdown-menu right-full top-0 z-10 !mx-[10px] hidden rounded-lg bg-white p-2 opacity-0 transition-[opacity,margin] duration-[0.1ms] before:absolute before:-right-5 before:top-0 before:h-full before:w-5 hs-dropdown-open:opacity-100 dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800 sm:mt-2 sm:w-48 sm:border sm:shadow-md sm:duration-[150ms] sm:dark:border"
							>
								<a
									class="flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
									href="#"
								>
									About
								</a>
								<a
									class="flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
									href="#"
								>
									Downloads
								</a>
								<a
									class="flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
									href="#"
								>
									Team Account
								</a>
							</div>
						</div>

						<a
							class="flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
							href="#"
						>
							Downloads
						</a>
						<a
							class="flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
							href="#"
						>
							Team Account
						</a>
					</div>
				</div>

				<a
					class="flex items-center gap-x-2 font-semibold text-gray-500 hover:text-blue-600 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500 sm:my-6 sm:border-l sm:border-gray-300 sm:pl-6"
					href="/login"
				>
					<svg
						class="h-4 w-4"
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						viewBox="0 0 16 16"
					>
						<path
							d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
						/>
					</svg>
					Log in
				</a>
			</div>
		</div>
	</nav>
</header>

<!-- Nav -->
<nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
	<div class="relative flex flex-row items-center justify-between gap-x-8 border-t py-4 dark:border-slate-700 sm:py-0">
		<div class="flex w-full items-center sm:w-[auto]">
			<span
				class="mr-4 whitespace-nowrap border-r border-r-white/[.7] pr-4 font-semibold text-gray-800 dark:text-white sm:border-transparent sm:py-3.5"
				>My project</span
			>

			<div class="w-full sm:hidden">
				<button
					type="button"
					class="hs-collapse-toggle group inline-flex w-full items-center justify-between gap-2 rounded-md border border-gray-200 px-2 py-1.5 align-middle font-medium text-gray-600 transition hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/[.5]"
					data-hs-collapse="#secondary-nav-toggle"
					aria-controls="secondary-nav-toggle"
					aria-label="Toggle navigation"
				>
					Overview
					<svg
						class="h-2.5 w-2.5 text-gray-600 transition group-hover:text-gray-800 hs-dropdown-open:rotate-180"
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						/>
					</svg>
				</button>
			</div>
		</div>

		<div
			id="secondary-nav-toggle"
			class="hs-collapse absolute right-0 top-16 hidden w-full overflow-hidden rounded-md bg-white transition-all duration-300 sm:static sm:top-0 sm:block sm:max-h-full sm:w-full sm:overflow-visible sm:bg-transparent"
		>
			<div class="flex flex-col py-2 sm:flex-row sm:justify-end sm:gap-x-6 sm:gap-y-0 sm:py-0">
				<a
					class="py-2 text-sm font-semibold text-blue-600 dark:text-white dark:hover:text-white sm:py-3.5"
					href="#">Overview</a
				>
				<a
					class="border-b-transparent py-2 text-sm font-medium text-gray-800 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white sm:border-b-2 sm:py-3.5"
					href="#">Features</a
				>
				<a
					class="border-b-transparent py-2 text-sm font-medium text-gray-800 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white sm:border-b-2 sm:py-3.5"
					href="#">Platforms</a
				>
				<a
					class="border-b-transparent py-2 text-sm font-medium text-gray-800 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white sm:border-b-2 sm:py-3.5"
					href="#">Pricing</a
				>
			</div>
		</div>
	</div>
</nav>
<!-- End Nav -->
