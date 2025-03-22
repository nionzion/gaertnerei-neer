<script lang="ts">
	import '../app.css';
	import { fly } from 'svelte/transition';
	import { page } from '$app/state';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
	let isMenuOpen = $state(false);
	let scrollY = $state(0);
	let innerHeight = $state(0);
	let prevScrollY = $state(0);
	let isHeaderVisible = $state(true);
	let currentUrl = $state('');

	// Beim Laden der Seite initialisieren
	currentUrl = page.url.pathname;

	// Beim Seitenwechsel die Animation neu starten
	$effect(() => {
		if (page.url.pathname !== currentUrl) {
			currentUrl = page.url.pathname;
			// Beim Seitenwechsel zum Anfang der Seite scrollen
			window.scrollTo(0, 0);
		}
	});

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	// Scroll-Effekte für den Header
	function handleScroll() {
		const currentScrollY = window.scrollY;
		
		// Header-Sichtbarkeit basierend auf Scrollrichtung aktualisieren
		if (currentScrollY > 100) {
			isHeaderVisible = currentScrollY < prevScrollY;
		} else {
			isHeaderVisible = true;
		}
		
		prevScrollY = currentScrollY;
		scrollY = currentScrollY;
	}
</script>

<svelte:window on:scroll={handleScroll} bind:innerHeight />

<div class="flex min-h-screen flex-col bg-neutral-50">
	<!-- Abstand für den fixed Header hinzufügen -->
	<div class="h-[85px]"></div>
	
	<!-- Navigation Component -->
	<Navigation 
		isMenuOpen={isMenuOpen}
		toggleMenu={toggleMenu}
		isHeaderVisible={isHeaderVisible}
		scrollY={scrollY}
		currentPath={page.url.pathname}
	/>

	<!-- Main Content -->
	<main class="flex-grow relative overflow-hidden">
		{#key currentUrl}
			<div in:fly={{ y: 15, duration: 400, delay: 50, opacity: 0.8 }}>
				{@render children()}
			</div>
		{/key}
	</main>

	<!-- Footer Component -->
	<Footer />
</div>
