<script lang="ts">
	// Gallery categories and images
	const categories = [
		{ id: 'all', name: 'Alle' },
		{ id: 'flowers', name: 'Blumen' },
		{ id: 'plants', name: 'Pflanzen' },
		{ id: 'garden', name: 'Garten' },
		{ id: 'seasonal', name: 'Saisonale Angebote' }
	];

	// Gallery images with categories
	const galleryItems = [
		{
			id: 1,
			title: 'Frühlingsblumen',
			category: 'flowers',
			image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
			description: 'Bunte Frühlingsblumen für Ihren Garten.'
		},
		{
			id: 2,
			title: 'Gartenrosen',
			category: 'flowers',
			image: 'https://images.unsplash.com/photo-1502809466100-5a82aa67e192?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
			description: 'Duftende Rosen in verschiedenen Farben.'
		},
		{
			id: 3,
			title: 'Zimmerpflanzen',
			category: 'plants',
			image: 'https://images.unsplash.com/photo-1463320898484-cdee8141c787?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
			description: 'Grüne Zimmerpflanzen für ein gesundes Raumklima.'
		},
		{
			id: 4,
			title: 'Kräutergarten',
			category: 'garden',
			image: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
			description: 'Frische Kräuter für Ihre Küche.'
		},
		{
			id: 5,
			title: 'Gartengestaltung',
			category: 'garden',
			image: 'https://images.unsplash.com/photo-1586280268958-9483302c3e5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
			description: 'Inspirierende Ideen für Ihren Garten.'
		},
		{
			id: 6,
			title: 'Herbstdekoration',
			category: 'seasonal',
			image: 'https://images.unsplash.com/photo-1508995476428-43d70c3d0042?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
			description: 'Dekorative Elemente für die Herbstsaison.'
		},
		{
			id: 7,
			title: 'Frühlingszwiebeln',
			category: 'seasonal',
			image: 'https://images.unsplash.com/photo-1560717845-968823efbee1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
			description: 'Frühlingszwiebeln für bunte Blüten im nächsten Jahr.'
		},
		{
			id: 8,
			title: 'Sukkulenten',
			category: 'plants',
			image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
			description: 'Pflegeleichte Sukkulenten für drinnen und draußen.'
		},
		{
			id: 9,
			title: 'Sommerblumen',
			category: 'flowers',
			image: 'https://images.unsplash.com/photo-1524598171347-6d0e1bdeb5db?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
			description: 'Farbenfrohe Sommerblumen für Ihre Beete.'
		},
		{
			id: 10,
			title: 'Gartenwerkzeuge',
			category: 'garden',
			image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
			description: 'Qualitätswerkzeuge für die Gartenarbeit.'
		},
		{
			id: 11,
			title: 'Weihnachtsdekoration',
			category: 'seasonal',
			image: 'https://images.unsplash.com/photo-1543589077-47d81606c1bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
			description: 'Festliche Weihnachtsdekoration für die Wintersaison.'
		},
		{
			id: 12,
			title: 'Kakteen',
			category: 'plants',
			image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
			description: 'Exotische Kakteen in verschiedenen Größen.'
		}
	];

	// Define types
	type GalleryItem = {
		id: number;
		title: string;
		category: string;
		image: string;
		description: string;
	};

	type Category = {
		id: string;
		name: string;
	};

	// State variables
	let activeCategory = $state<string>('all');
	let selectedItem = $state<GalleryItem | null>(null);
	let imageLoadError = $state<Record<number, boolean>>({}); 
	
	// Filter gallery items based on active category
	const filteredItems = $derived(activeCategory === 'all' 
		? galleryItems 
		: galleryItems.filter(item => item.category === activeCategory));

	// Functions to handle category and item selection
	function setCategory(categoryId: string): void {
		activeCategory = categoryId;
		selectedItem = null;
	}

	function viewItem(item: GalleryItem): void {
		selectedItem = item;
		// When modal opens, trap focus inside it
		setTimeout(() => {
			const closeButton = document.querySelector('#modal-close-button') as HTMLElement | null;
			if (closeButton) closeButton.focus();
		}, 50);
	}

	function closeModal(): void {
		selectedItem = null;
	}
	
	function handleImageError(itemId: number): void {
		imageLoadError[itemId] = true;
	}
</script>

<svelte:head>
	<title>Galerie - Gärtnerei Irina Neer</title>
	<meta
		name="description"
		content="Entdecken Sie die Vielfalt unserer Pflanzen und Produkte in der Bildergalerie der Gärtnerei Irina Neer."
	/>
</svelte:head>

<!-- Hero Section -->
<section
	class="relative bg-cover bg-center bg-no-repeat py-24"
	style="background-image: url('https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')"
>
	<div class="absolute inset-0 bg-black/50"></div>
	<div class="relative container mx-auto px-4 text-center text-white">
		<h1 class="mb-4 text-4xl font-bold md:text-5xl">Unsere Galerie</h1>
		<p class="mx-auto max-w-3xl text-lg">Entdecken Sie die Vielfalt unserer Pflanzen und Produkte</p>
	</div>
</section>

<!-- Gallery Section -->
<section class="py-16">
	<div class="container mx-auto px-4">
		<!-- Category Filter -->
		<div class="mb-12 flex flex-wrap justify-center gap-4">
			{#each categories as category}
				<button
					class="rounded-full px-6 py-2 font-medium transition {activeCategory === category.id ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}"
					onclick={() => setCategory(category.id)}
				>
					{category.name}
				</button>
			{/each}
		</div>

		<!-- Gallery Grid -->
		<div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{#each filteredItems as item}
				<div
					class="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg"
					onclick={() => viewItem(item)}
					onkeydown={(e) => e.key === 'Enter' && viewItem(item)}
					tabindex="0"
					role="button"
					aria-label="{item.title} anzeigen"
				>
					<div class="relative h-64 overflow-hidden">
						{#if imageLoadError[item.id]}
							<div class="flex h-full w-full items-center justify-center bg-gray-100">
								<p class="text-gray-500">Bild konnte nicht geladen werden</p>
							</div>
						{:else}
							<img
								src={item.image}
								alt={item.title}
								class="h-full w-full object-cover transition duration-300 group-hover:scale-110"
								onerror={() => handleImageError(item.id)}
							/>
						{/if}
					</div>
					<div class="p-4">
						<h3 class="text-lg font-semibold text-green-800">{item.title}</h3>
						<p class="text-sm text-gray-600">{item.description}</p>
					</div>
				</div>
			{/each}
		</div>

		{#if filteredItems.length === 0}
			<div class="mt-8 text-center">
				<p class="text-lg text-gray-600">Keine Bilder in dieser Kategorie gefunden.</p>
			</div>
		{/if}
	</div>
</section>

<!-- Modal for viewing images -->
{#if selectedItem}
	<!-- Using a button inside the div to handle click events according to a11y best practices -->
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
		role="dialog"
		tabindex="-1"
		aria-modal="true"
		onkeydown={(e: KeyboardEvent) => {
			if (e.key === 'Escape') closeModal();
			// Keep focus trapped inside modal with Tab key
			if (e.key === 'Tab') {
				const focusableElements = document.querySelectorAll('#modal-content button, #modal-content [tabindex="0"]');
				if (focusableElements.length > 0) {
					const firstElement = focusableElements[0] as HTMLElement;
					const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
					
					if (e.shiftKey && document.activeElement === firstElement) {
						e.preventDefault();
						lastElement.focus();
					} else if (!e.shiftKey && document.activeElement === lastElement) {
						e.preventDefault();
						firstElement.focus();
					}
				}
			}
		}}
	>
		<!-- Overlay button for closing modal -->
		<button
			class="absolute inset-0 w-full h-full cursor-default"
			onclick={closeModal}
			aria-label="Schließen des Modalfensters"
		></button>

		<div
			id="modal-content"
			class="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-lg bg-white"
			role="document"
		>
			<button
				id="modal-close-button"
				class="absolute right-4 top-4 z-10 rounded-full bg-white/80 p-2 text-gray-800 shadow-md transition hover:bg-white"
				onclick={closeModal}
				aria-label="Schließen"
			>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>

			<div class="flex flex-col md:flex-row">
				<div class="h-96 md:h-auto md:w-2/3">
					{#if selectedItem && imageLoadError[selectedItem.id]}
						<div class="flex h-full w-full items-center justify-center bg-gray-100">
							<p class="text-gray-500">Bild konnte nicht geladen werden</p>
						</div>
					{:else}
						<img 
							src={selectedItem?.image || ''} 
							alt={selectedItem?.title || ''} 
							class="h-full w-full object-cover" 
							onerror={() => selectedItem && handleImageError(selectedItem.id)}
						/>
					{/if}
				</div>
				<div class="p-6 md:w-1/3">
					<h3 class="mb-2 text-2xl font-semibold text-green-800">{selectedItem?.title || ''}</h3>
					<p class="mb-4 text-gray-600">{selectedItem?.description || ''}</p>
					<p class="text-sm text-gray-500">
						Kategorie: {selectedItem ? categories.find((c) => c.id === selectedItem.category)?.name || '' : ''}
					</p>
				</div>
			</div>
		</div>
	</div>
{/if}
