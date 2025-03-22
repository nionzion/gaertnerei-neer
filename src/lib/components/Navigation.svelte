<script lang="ts">
	import { scale, slide } from 'svelte/transition';
	import { elasticOut, quintOut } from 'svelte/easing';
	import { Home } from 'lucide-svelte';

	// Props
	export let isMenuOpen: boolean;
	export let toggleMenu: () => void;
	export let isHeaderVisible: boolean;
	export let scrollY: number;
	export let currentPath: string;
</script>

<header class="fixed w-full z-50 transition-all duration-500" class:translate-y-0={isHeaderVisible} class:shadow-lg={scrollY > 20} class:-translate-y-full={!isHeaderVisible} style="background-color: #f8f9fa; border-bottom: 1px solid #e9ecef">
	<div class="container mx-auto px-4 py-4">
		<div class="flex items-center justify-between">
			<a href="/" class="flex items-center gap-4 transition duration-300 hover:opacity-90">
				<img src="/logo.svg" alt="Gärtnerei Irina Neer Logo" class="h-16 drop-shadow-lg" />
				<div class="hidden sm:block">
					<span class="block font-sans font-light tracking-wider text-gray-700">Gärtnerei</span>
					<span class="block font-serif text-2xl font-bold text-gray-800">Irina Neer</span>
				</div>
			</a>

			<!-- Desktop navigation -->
			<nav class="hidden lg:block">
				<ul class="flex flex-wrap justify-end gap-1">
					<li>
						<a href="/" class="px-3 py-2 rounded-md text-gray-700 font-medium hover:bg-gray-200 transition-colors {currentPath === '/' ? 'bg-gray-200' : ''}" aria-label="Startseite">
							Home
						</a>
					</li>
					<li>
						<a href="/ueber-uns" class="px-3 py-2 rounded-md text-gray-700 font-medium hover:bg-gray-200 transition-colors {currentPath === '/ueber-uns' ? 'bg-gray-200' : ''}">
							Über uns
						</a>
					</li>
					<li>
						<a href="/galerie" class="px-3 py-2 rounded-md text-gray-700 font-medium hover:bg-gray-200 transition-colors {currentPath === '/galerie' ? 'bg-gray-200' : ''}">
							Galerie
						</a>
					</li>
					<li>
						<a href="/oeffnungszeiten" class="px-3 py-2 rounded-md text-gray-700 font-medium hover:bg-gray-200 transition-colors {currentPath === '/oeffnungszeiten' ? 'bg-gray-200' : ''}">
							Öffnungszeiten
						</a>
					</li>
					<li>
						<a href="/presse" class="px-3 py-2 rounded-md text-gray-700 font-medium hover:bg-gray-200 transition-colors {currentPath === '/presse' ? 'bg-gray-200' : ''}">
							Presse
						</a>
					</li>
					<li>
						<a href="/gartengeschichten" class="px-3 py-2 rounded-md text-gray-700 font-medium hover:bg-gray-200 transition-colors {currentPath === '/gartengeschichten' ? 'bg-gray-200' : ''}">
							Gartengeschichten
						</a>
					</li>
					<li>
						<a href="/kontakt" class="px-3 py-2 rounded-md text-gray-700 font-medium hover:bg-gray-200 transition-colors {currentPath === '/kontakt' ? 'bg-gray-200' : ''}">
							Kontakt
						</a>
					</li>
					<li>
						<a href="/anfahrt" class="px-3 py-2 rounded-md text-gray-700 font-medium hover:bg-gray-200 transition-colors {currentPath === '/anfahrt' ? 'bg-gray-200' : ''}">
							Anfahrt
						</a>
					</li>
				</ul>
			</nav>

			<!-- Mobile menu button -->
			<button class="rounded-full p-2 text-gray-700 transition-all duration-300 hover:bg-gray-200 hover:scale-105 lg:hidden" onclick={toggleMenu} aria-label="Menu">
				<div class="relative h-6 w-6">
					{#if isMenuOpen}
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6" in:scale={{ duration: 200, delay: 50, easing: elasticOut }}>
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
					{:else}
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6" in:scale={{ duration: 200, delay: 50, easing: elasticOut }}>
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					{/if}
				</div>
			</button>
		</div>

		<!-- Mobile navigation -->
		{#if isMenuOpen}
			<div transition:slide={{ duration: 300, easing: quintOut }}>
				<nav class="mt-5 md:hidden">
					<ul class="rounded-xl bg-white shadow-lg overflow-hidden border border-gray-200">
						<li>
							<a href="/" class="flex items-center border-b border-gray-200 px-4 py-3 text-gray-700 hover:bg-gray-100" onclick={toggleMenu} aria-label="Startseite">
								<Home size="18" class="mr-2" />
								Home
							</a>
						</li>
						<li>
							<a href="/ueber-uns" class="flex items-center border-b border-gray-200 px-4 py-3 text-gray-700 hover:bg-gray-100" onclick={toggleMenu}>
								Über uns
							</a>
						</li>
						<li>
							<a href="/galerie" class="flex items-center border-b border-gray-200 px-4 py-3 text-gray-700 hover:bg-gray-100" onclick={toggleMenu}>
								Galerie
							</a>
						</li>
						<li>
							<a href="/oeffnungszeiten" class="flex items-center border-b border-gray-200 px-4 py-3 text-gray-700 hover:bg-gray-100" onclick={toggleMenu}>
								Öffnungszeiten
							</a>
						</li>
						<li>
							<a href="/presse" class="flex items-center border-b border-gray-200 px-4 py-3 text-gray-700 hover:bg-gray-100" onclick={toggleMenu}>
								Presse
							</a>
						</li>
						<li>
							<a href="/gartengeschichten" class="flex items-center border-b border-gray-200 px-4 py-3 text-gray-700 hover:bg-gray-100" onclick={toggleMenu}>
								Gartengeschichten
							</a>
						</li>
						<li>
							<a href="/kontakt" class="flex items-center border-b border-gray-200 px-4 py-3 text-gray-700 hover:bg-gray-100" onclick={toggleMenu}>
								Kontakt
							</a>
						</li>
						<li>
							<a href="/anfahrt" class="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100" onclick={toggleMenu}>
								Anfahrt
							</a>
						</li>
					</ul>
				</nav>
			</div>
		{/if}
	</div>
</header>
