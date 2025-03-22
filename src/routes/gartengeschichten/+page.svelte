<script>
	const blogPosts = [
		{
			title: 'Klimaresistente Pflanzen für den modernen Garten',
			author: 'Igor Neer',
			date: '18.03.2025',
			category: 'Pflanzenexpertise',
			image: 'https://images.unsplash.com/photo-1597573337414-abf7d7295d81',
			excerpt: 'In Zeiten des Klimawandels müssen wir unsere Gärten neu denken. Erfahren Sie, welche trockenheitsresistenten Stauden nicht nur robust sind, sondern auch optisch überzeugen. Experte Igor Neer erklärt, wie Sie Ihren Garten zukunftssicher gestalten können.',
			readTime: '8 min'
		},
		{
			title: 'Nachhaltige Stadtbepflanzung: Projekte, die begeistern',
			author: 'Artur Neer',
			date: '05.03.2025',
			category: 'Stadtbepflanzung',
			image: 'https://images.unsplash.com/photo-1558820161-795bc79a591e',
			excerpt: 'Wie wir in der Blomeschen Wildnis und den umliegenden Städten neue Konzepte für urbane Begrünung entwickeln. Ein Einblick in unsere aktuellen Projekte und die positiven Auswirkungen auf das Stadtklima und die Lebensqualität der Bewohner.',
			readTime: '12 min'
		},
		{
			title: 'Saisonale Pflanzpläne für den perfekten Privatgarten',
			author: 'Irina Neer',
			date: '20.02.2025',
			category: 'Gartengestaltung',
			image: 'https://images.unsplash.com/photo-1558904869-ba6e1eb0e800',
			excerpt: 'Mit der richtigen Planung können Sie einen Garten erschaffen, der das ganze Jahr über blüht und Freude bereitet. Entdecken Sie unsere maßgeschneiderten Konzepte für jeden Gartenstil und jede Jahreszeit.',
			readTime: '10 min'
		},
		{
			title: 'Biodiversität im eigenen Garten fördern',
			author: 'Igor Neer',
			date: '08.02.2025',
			category: 'Nachhaltigkeit',
			image: 'https://images.unsplash.com/photo-1543459176-4426b37aec27',
			excerpt: 'Wie Sie mit einfachen Mitteln die Artenvielfalt in Ihrem Garten unterstützen können. Praktische Tipps zur Schaffung von Lebensräumen für Insekten, Vögel und andere Tiere, ohne dabei auf eine ästhetische Gestaltung verzichten zu müssen.',
			readTime: '7 min'
		},
		{
			title: 'Die Blomeschen Wildnis: Unser heimischer Inspirationsquell',
			author: 'Irina Neer',
			date: '15.01.2025',
			category: 'Regionales',
			image: 'https://images.unsplash.com/photo-1631472966916-e8dc6161986c',
			excerpt: 'Die Blomeschen Wildnis ist nicht nur unsere Heimat, sondern auch eine einzigartige Landschaft voller Inspiration. Entdecken Sie mit uns die natürliche Schönheit unserer Region und erfahren Sie, wie sie unsere Arbeit und Philosophie geprägt hat.',
			readTime: '9 min'
		},
		{
			title: 'Von der Skizze zum blühenden Konzept: Unser Designprozess',
			author: 'Artur Neer',
			date: '05.01.2025',
			category: 'Hinter den Kulissen',
			image: 'https://images.unsplash.com/photo-1631125915902-d6296c6e9c65',
			excerpt: 'Ein Einblick in unsere Arbeitsweise: Wie wir von der ersten Idee über die Planung bis zur Umsetzung maßgeschneiderter Gartenkonzepte vorgehen. Ein persönlicher Bericht mit Beispielen aus unserer täglichen Arbeit.',
			readTime: '11 min'
		}
	];

	const categories = [...new Set(blogPosts.map((post) => post.category))];
	let selectedCategory = 'Alle';

	$: filteredPosts = selectedCategory === 'Alle' ? blogPosts : blogPosts.filter(post => post.category === selectedCategory);

	function setCategory(category) {
		selectedCategory = category;
	}
</script>

<svelte:head>
	<title>Gartengeschichten - Gärtnerei Irina Neer</title>
	<meta
		name="description"
		content="Entdecken Sie unsere Gartengeschichten - Tipps, Inspirationen und Einblicke in die Welt der Gartengestaltung, Pflanzen und Natur."
	/>
</svelte:head>

<!-- Blog Content Section -->
<section class="py-16">
	<div class="container mx-auto px-4">
		<div class="mx-auto max-w-5xl">
			<!-- Category Filter -->
			<div class="mb-12 flex flex-wrap justify-center gap-3">
				<button
					class={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === 'Alle' ? 'bg-teal-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
					onclick={() => setCategory('Alle')}
				>
					Alle Themen
				</button>
				{#each categories as category}
					<button
						class={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category ? 'bg-teal-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
						onclick={() => setCategory(category)}
					>
						{category}
					</button>
				{/each}
			</div>

			<!-- Blog Posts -->
			<div class="grid gap-10 md:grid-cols-2">
				{#each filteredPosts as post}
					<article class="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
						<div class="relative h-56 overflow-hidden">
							<img
								src="{post.image}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
								alt={post.title}
								class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>
							<div class="absolute left-0 top-0 m-4 rounded-full bg-teal-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
								{post.category}
							</div>
						</div>
						<div class="flex flex-1 flex-col p-6">
							<div class="mb-2 flex items-center space-x-2 text-sm text-gray-500">
								<span>{post.date}</span>
								<span>•</span>
								<span>{post.readTime} Lesezeit</span>
							</div>
							<h2 class="mb-3 font-serif text-xl font-bold leading-tight text-gray-900 group-hover:text-teal-700">
								{post.title}
							</h2>
							<p class="mb-5 flex-1 text-gray-600">{post.excerpt}</p>
							<div class="flex items-center">
								<div class="flex-shrink-0">
									<span class="inline-block h-8 w-8 overflow-hidden rounded-full bg-teal-100 text-center leading-8 text-teal-800">
										{post.author[0]}
									</span>
								</div>
								<div class="ml-3">
									<p class="text-sm font-medium text-gray-900">{post.author}</p>
								</div>
							</div>
							<a href="#" class="mt-4 inline-flex items-center font-medium text-teal-700 transition hover:text-teal-900">
								Weiterlesen
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									class="ml-1 h-4 w-4"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M14 5l7 7m0 0l-7 7m7-7H3"
									/>
								</svg>
							</a>
						</div>
					</article>
				{/each}
			</div>

			<!-- Newsletter Signup -->
			<div class="mt-16 rounded-xl bg-gradient-to-r from-teal-50 to-green-50 p-8 shadow-md">
				<h2 class="mb-4 font-serif text-2xl font-bold text-teal-800">Abonnieren Sie unsere Gartengeschichten</h2>
				<p class="mb-6 text-gray-700">
					Erhalten Sie regelmäßig neue Artikel, saisonale Tipps und exklusive Einblicke direkt in Ihr
					Postfach.
				</p>
				<form class="flex flex-col gap-4 sm:flex-row">
					<input
						type="email"
						placeholder="Ihre E-Mail-Adresse"
						class="flex-1 rounded-md border-gray-300 px-4 py-3 focus:border-teal-500 focus:ring focus:ring-teal-200 focus:ring-opacity-50"
						required
					/>
					<button
						type="submit"
						class="rounded-md bg-teal-600 px-6 py-3 font-medium text-white transition-colors hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
					>
						Abonnieren
					</button>
				</form>
				<p class="mt-3 text-xs text-gray-500">
					Wir respektieren Ihre Privatsphäre. Sie können den Newsletter jederzeit abbestellen.
				</p>
			</div>
		</div>
	</div>
</section>
