<script>
	const milestones = [
		{
			year: '1995',
			title: 'Gründung',
			description: 'Irina Neer pflanzt den ersten Samen und gründet die Gärtnerei in der Blomeschen Wildnis.'
		},
		{
			year: '2000',
			title: 'Erweiterung',
			description: 'Vergrößerung der Anbaufläche und Erweiterung des Sortiments an Zierpflanzen.'
		},
		{
			year: '2010',
			title: 'Modernisierung',
			description: 'Umstellung auf moderne, umweltfreundliche Anbaumethoden und Bewässerungssysteme.'
		},
		{
			year: '2015',
			title: 'Stadtbepflanzung',
			description: 'Erste Stadtbepflanzungsprojekte in umliegenden Gemeinden und Start der Gartenplanungsservices.'
		},
		{
			year: 'Heute',
			title: 'Familienbetrieb',
			description: 'Ein Familienunternehmen mit großer Erfahrung und regionaler Präsenz auf dem Weg in die zweite Generation.'
		}
	];

	const values = [
		{
			title: 'Qualität',
			description: 'Wir legen höchsten Wert auf Qualität – von der Auswahl der Rohstoffe bis zum fertigen Produkt.'
		},
		{
			title: 'Vielfalt',
			description: 'Ein breites Spektrum an Zierpflanzen für jeden Geschmack und Gartenstil.'
		},
		{
			title: 'Expertise',
			description: 'Fachkompetenz in der Konzeption privater Gärten und öffentlicher Stadtbepflanzungen.'
		},
		{
			title: 'Nachhaltigkeit',
			description: 'Verantwortungsvoller Umgang mit natürlichen Ressourcen und umweltbewusstes Handeln.'
		},
		{
			title: 'Persönlichkeit',
			description: 'Als Familienbetrieb legen wir Wert auf persönliche Beratung und individuelle Kundenwünsche.'
		}
	];
</script>

<svelte:head>
	<title>Über uns - Gärtnerei Irina Neer</title>
	<meta
		name="description"
		content="Erfahren Sie mehr über die Geschichte und Angebote der Gärtnerei Irina Neer: Gestaltung privater Gärten, Bepflanzungskonzepte für Städte und mehr."
	/>
</svelte:head>

<!-- Hero Section -->
<section
	class="relative bg-cover bg-center bg-no-repeat py-24"
	style="background-image: url('https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')"
>
	<div class="absolute inset-0 bg-black/50"></div>
	<div class="relative container mx-auto px-4 text-center text-white">
		<h1 class="mb-4 text-4xl font-bold md:text-5xl">Über uns</h1>
		<p class="mx-auto max-w-3xl text-lg">Unsere Geschichte, unsere Werte und unsere Leidenschaft für die Pflanzenwelt</p>
	</div>
</section>

<!-- Story Section -->
<section class="py-16">
	<div class="container mx-auto px-4">
		<div class="mx-auto max-w-4xl">
			<h2 class="mb-8 text-center font-serif text-3xl font-bold tracking-tight text-teal-800 md:text-4xl">
				<span class="relative inline-block">
					Unsere Geschichte
					<span class="absolute -bottom-2 left-0 h-1 w-1/3 bg-gradient-to-r from-teal-500 to-emerald-400"></span>
				</span>
			</h2>

			<div class="mb-12 space-y-8">
				<div class="rounded-lg border-l-4 border-teal-500 bg-gradient-to-r from-teal-50 to-transparent px-6 py-5">
					<h3 class="mb-3 text-xl font-semibold text-teal-800">Die Anfänge</h3>
					<p class="text-lg leading-relaxed text-slate-700">
						Symbolisch hat die Inhaberin <span class="font-medium text-teal-700">Irina Neer</span> im Jahr 1995 den ersten Samen gesetzt und somit das Gründungsdatum für unseren Betrieb. Niedergelassen in der Blomeschen Wildnis, um den "wilden Blomen" Struktur zu geben.
					</p>
					<p class="mt-3 text-lg leading-relaxed text-slate-700">
						Mit jeder kommenden und gehenden Jahreszeit haben wir an wertvoller Erfahrung gesammelt. Mit jeder folgenden Saison haben wir uns weiterentwickelt. Wir haben unsere Produkte <span class="italic text-emerald-700">wachsen und blühen</span> sehen. Dabei sind wir selbst aufgeblüht und mitgewachsen.
					</p>
				</div>

				<div class="rounded-lg border-l-4 border-emerald-500 bg-gradient-to-r from-emerald-50 to-transparent px-6 py-5">
					<h3 class="mb-3 text-xl font-semibold text-emerald-800">Unser Angebot</h3>
					<p class="text-lg leading-relaxed text-slate-700">
						Durch sehr viel <span class="font-medium text-emerald-700">Fleiß und Liebe</span> zu unserem Beruf haben wir ein breites Spektrum an Zierpflanzen in unser Sortiment aufnehmen können, ohne dabei der Qualität unserer Produkte zu schaden. Eine reichliche <span class="font-medium text-emerald-700">Vielfalt</span> und ein <span class="font-medium text-emerald-700">hochwertiges Erzeugnis</span> steht uns dabei im Vordergrund.
					</p>
					<div class="mt-4 flex flex-wrap gap-3">
						<span class="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800">Maßgeschneiderte Gartenkonzepte</span>
						<span class="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800">Professionelle Bepflanzung</span>
						<span class="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800">Stadtbepflanzungen</span>
					</div>
				</div>

				<div class="rounded-lg border-l-4 border-indigo-500 bg-gradient-to-r from-indigo-50 to-transparent px-6 py-5">
					<h3 class="mb-3 text-xl font-semibold text-indigo-800">Qualitätsversprechen</h3>
					<p class="text-lg leading-relaxed text-slate-700">
						Um unserem Namen gerecht zu werden, legen wir sehr viel Wert darauf, dass die Rohstoffe ebenso von <span class="font-medium text-indigo-700">hoher Qualität</span> sind. Schliesslich lassen sich so gleichbleibende Ergebnisse erzielen. Durch unsere ständige Eigenleistung ist gewährleistet, dass wir dieses hohe Niveau weiterhin aufrecht erhalten können.
					</p>
					<p class="mt-3 text-lg leading-relaxed text-slate-700">
						Dieser beschriebene Prozess ist fortlaufend und unser <span class="font-medium text-indigo-700">Bestreben nach Perfektion</span> immer präsent.
					</p>
				</div>

				<div class="rounded-lg border-l-4 border-amber-500 bg-gradient-to-r from-amber-50 to-transparent px-6 py-5">
					<h3 class="mb-3 text-xl font-semibold text-amber-800">Innovation & Zukunft</h3>
					<p class="text-lg leading-relaxed text-slate-700">
						<span class="font-medium text-amber-700">Selektion</span> ist ein wichtiger Faktor. Stets sind wir auf der Suche nach neuen Sorten und Besonderheiten in der Pflanzenwelt, um wiederkehrende Frische und Farbe in Ihren Garten zu bringen.
					</p>
					<div class="relative mt-5 border-t border-amber-100 pt-5">
						<p class="text-lg font-semibold italic text-slate-700">
							Die Gärtnerei Irina Neer ist ein <span class="text-amber-700">Familienunternehmen</span> mit großer Erfahrung in der Zierpflanzenproduktion und einer viel versprechenden, grünen, gar farbenfrohen Zukunft. Unsere Wurzeln sind kraftvoll, auf dem Weg in die zweite Generation.
						</p>
					</div>
				</div>

			</div>

			<!-- Timeline -->
			<h3 class="mb-6 text-2xl font-semibold text-green-800">Unsere Meilensteine</h3>
			<div class="mb-16 relative border-l-2 border-green-600 pl-10 before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-green-600">
				{#each milestones as milestone, i}
					<div class="mb-10 relative">
						<div class="absolute -left-14 flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white">
							{i + 1}
						</div>
						<div class="rounded-lg bg-white p-6 shadow-md">
							<span class="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-800">{milestone.year}</span>
							<h4 class="mt-3 mb-2 text-xl font-semibold text-green-800">{milestone.title}</h4>
							<p class="text-gray-600">{milestone.description}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Values Section -->
<section class="bg-green-50 py-16">
	<div class="container mx-auto px-4">
		<h2 class="mb-12 text-center text-3xl font-bold text-green-800 md:text-4xl">Unsere Werte</h2>

		<div class="grid gap-8 md:grid-cols-2">
			{#each values as value}
				<div class="rounded-lg bg-white p-8 shadow-md">
					<h3 class="mb-4 text-xl font-semibold text-green-800">{value.title}</h3>
					<p class="text-gray-600">{value.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Team Section -->
<section class="py-16">
	<div class="container mx-auto px-4 text-center">
		<h2 class="mb-12 text-3xl font-bold text-green-800 md:text-4xl">Unser Team</h2>

		<div class="flex flex-col items-center">
			<div class="mb-6 flex h-64 w-64 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-teal-400 via-emerald-500 to-teal-600 p-1 shadow-lg">
				<div class="flex h-full w-full items-center justify-center rounded-full bg-white">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="h-48 w-48">
						<circle cx="50" cy="50" r="48" fill="#e9f5f4" />
						<circle cx="50" cy="35" r="16" fill="#2dd4bf" />
						<path d="M50,95 C68,95 85,83 85,68 C85,55 70,54 50,54 C30,54 15,55 15,68 C15,83 32,95 50,95 Z" fill="#2dd4bf" />
						<path d="M50,95 C60,95 75,90 75,82 C75,74 65,73 50,73 C35,73 25,74 25,82 C25,90 40,95 50,95 Z" fill="#fff" />
					</svg>
				</div>
			</div>
			<h3 class="text-2xl font-semibold text-green-800">Irina Neer</h3>
			<p class="mb-4 text-green-600">Gründerin & Inhaberin</p>
			<p class="mx-auto max-w-xl text-gray-600">
				Mit ihrer Leidenschaft für Pflanzen und ihrem visionären Blick hat Irina Neer die Gärtnerei zu dem gemacht, was sie heute ist: ein Familienbetrieb mit Herz, Seele und höchsten Qualitätsstandards.
			</p>
		</div>

		<div class="mt-16 grid gap-8 md:grid-cols-2">
			<div class="flex flex-col items-center">
				<div class="mb-4 flex h-40 w-40 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-sky-400 to-blue-600 p-1 shadow-md">
					<div class="flex h-full w-full items-center justify-center rounded-full bg-white">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="h-32 w-32">
							<circle cx="50" cy="50" r="48" fill="#eff6ff" />
							<circle cx="50" cy="35" r="16" fill="#0284c7" />
							<path d="M50,95 C68,95 85,83 85,68 C85,55 70,54 50,54 C30,54 15,55 15,68 C15,83 32,95 50,95 Z" fill="#0284c7" />
							<path d="M37,36 a2,2 0 1,0 4,0 a2,2 0 1,0 -4,0" fill="#fff" />
							<path d="M59,36 a2,2 0 1,0 4,0 a2,2 0 1,0 -4,0" fill="#fff" />
							<path d="M40,44 C45,47 55,47 60,44" stroke="#fff" stroke-width="1.5" fill="none" />
						</svg>
					</div>
				</div>
				<h4 class="text-xl font-semibold text-green-800">Igor Neer</h4>
				<p class="text-green-600">Customer Relations</p>
			</div>

			<div class="flex flex-col items-center">
				<div class="mb-4 flex h-40 w-40 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-amber-400 to-red-500 p-1 shadow-md">
					<div class="flex h-full w-full items-center justify-center rounded-full bg-white">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="h-32 w-32">
							<circle cx="50" cy="50" r="48" fill="#fef2f2" />
							<circle cx="50" cy="35" r="16" fill="#f59e0b" />
							<path d="M50,95 C68,95 85,83 85,68 C85,55 70,54 50,54 C30,54 15,55 15,68 C15,83 32,95 50,95 Z" fill="#f59e0b" />
							<path d="M50,95 C60,95 75,90 75,82 C75,74 65,73 50,73 C35,73 25,74 25,82 C25,90 40,95 50,95 Z" fill="#fef2f2" opacity="0.3" />
							<path d="M37,36 a2,2 0 1,0 4,0 a2,2 0 1,0 -4,0" fill="#fff" />
							<path d="M59,36 a2,2 0 1,0 4,0 a2,2 0 1,0 -4,0" fill="#fff" />
							<path d="M43,43 C46,46 54,46 57,43" stroke="#fff" stroke-width="1.5" fill="none" />
						</svg>
					</div>
				</div>
				<h4 class="text-xl font-semibold text-green-800">Artur Neer</h4>
				<p class="text-green-600">Gründer & Produktionsleiter</p>
			</div>
		</div>
	</div>
</section>
