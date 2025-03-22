<script>
	import Testimonial from '$lib/components/Testimonial.svelte';const seasons = [
		{
			name: 'Frühling',
			image: 'https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
			description: 'Bunte Frühlingsblumen und Pflanzen für Ihren Garten sowie frische Kräuter- und Gemüsepflanzen für den eigenen Anbau.'
		},
		{
			name: 'Sommer',
			image: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
			description: 'Sommerliche Vielfalt für Balkon und Terrasse sowie frisches, selbstangebautes Gemüse direkt aus unserem Garten.'
		},
		{
			name: 'Herbst',
			image: 'https://images.unsplash.com/photo-1508995476428-43d70c3d0042?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
			description: 'Herbstliche Pflanzen für ein farbenprächtiges Gartenjahr und späte Ernte aus unserem eigenen Anbau.'
		},
		{
			name: 'Winter',
			image: 'https://images.unsplash.com/photo-1511793520996-9eb7d969a87d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
			description: 'Winterharte Pflanzen, festliche Dekorationen und Beratung für Ihre Frühjahrsplanung.'
		}
	];

	const features = [
		{
			title: 'Qualität',
			icon: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
			description: 'Hochwertige Pflanzen aus eigener Aufzucht für langanhaltende Freude in Ihrem Garten.'
		},
		{
			title: 'Vielfalt',
			icon: 'M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819',
			description: 'Ein breites Spektrum an Zierpflanzen für jeden Geschmack und Gartenstil.'
		},
		{
			title: 'Beratung',
			icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z',
			description: 'Persönliche und fachkundige Beratung für Ihre individuellen Gartenbedürfnisse.'
		}
	];

	
	
	const testimonials = [
		{
			rating: 5,
			content: "Ich kaufe hier seit Jahren alle meine Pflanzen, gern auch zum Verschenken, da ich immer weiß, ich verschenke gute Qualität. Die Beratung ist kompetent und umfangreich, alle Mitarbeiter sehr freundlich, auch wenn das Geschäft mal wieder rappelvoll ist. Dafür möchte ich mich auf diesem Wege herzlich bedanken!!!",
			author: "Birgit",
			authorRole: "Google Rezension"
		},
		{
			rating: 5,
			content: "Seit über 20 Jahren kaufen wir unsere Blumen in der Gärtnerei von Irina Neer. Wir sind immer noch total begeistert über die sehr gute Qualität und die Vielfalt der angebotenen Pflanzen. Hier erhält man eine fachkundige Beratung zum Standort, Bepflanzung und Pflege der Blumen. Wir bleiben weiterhin Stammkunden dieser hervorragenden Gärtnerei 😍",
			author: "Lara",
			authorRole: "Google Rezension"
		},
		{
			rating: 5,
			content: "Seit wir hier in der Elbmarsch wohnen, holen wir hier unsere Pflanzen. Die Pflanzen haben eine tolle Qualität, sind blühfreudig und machen das ganze Jahr Freude. Die Atmosphäre beim Einkaufen ist immer sehr angenehm und entspannt. Die Familie Neer ist sehr nett und sehr hilfsbereit mit Rat und Tat. Auch die Mitarbeiter sind sehr freundlich und hilfsbereit. Wir kommen so gerne hier her. Für uns ist die Gärtnerei erste Wahl!",
			author: "Holli G.",
			authorRole: "Google Rezension"
		}
	];
</script>

<svelte:head>
	<title>Gärtnerei Irina Neer - Qualität seit 1995</title>
	<meta name="description" content="Willkommen bei der Gärtnerei Irina Neer - Ihr Spezialist für hochwertige Zierpflanzen in der Blomeschen Wildnis seit 1995." />
</svelte:head>

<!-- Hero Section -->
<section class="relative h-[70vh] bg-cover bg-center bg-no-repeat" style="background-image: url('https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80')">
	<div class="absolute inset-0 bg-black/40"></div>
	<div class="relative flex h-full items-center justify-center text-center text-white">
		<div class="container px-4">
			<h1 class="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">Willkommen bei der<br /> Gärtnerei Irina Neer</h1>
			<p class="mx-auto mb-8 max-w-2xl text-lg md:text-xl">Ihr Spezialist für hochwertige Zierpflanzen in der Blomeschen Wildnis seit 1995</p>
			<div class="flex flex-wrap justify-center gap-4">
				<a
					href="/galerie"
					class="rounded-full bg-green-600 px-8 py-3 font-medium text-white transition hover:bg-green-700"
					>Unsere Pflanzen</a
				>
				<a
					href="/kontakt"
					class="rounded-full border-2 border-white bg-transparent px-8 py-3 font-medium text-white transition hover:bg-white/20"
					>Kontakt</a
				>
			</div>
		</div>
	</div>
</section>

<!-- Introduction Section -->
<section class="py-16">
	<div class="container mx-auto px-4">
		<div class="mx-auto max-w-3xl text-center">
			<h2 class="mb-6 text-3xl font-bold text-green-800 md:text-4xl">Unsere Geschichte, unsere Werte</h2>
			<p class="mb-8 text-lg text-gray-700">
				Unsere Leidenschaft zum Gartenbau spiegelt sich in der Qualität unserer Produkte wider. Diese Qualität schafft Vertrauen und Treue.
			</p>
			<a href="/ueber-uns" class="inline-block text-green-700 hover:text-green-900 hover:underline">Mehr über uns erfahren →</a>
		</div>
	</div>
</section>

<!-- Features Section -->
<section class="bg-green-50 py-16">
	<div class="container mx-auto px-4">
		<h2 class="mb-12 text-center text-3xl font-bold text-green-800 md:text-4xl">Was uns auszeichnet</h2>
		<div class="grid gap-8 md:grid-cols-3">
			{#each features as feature}
				<div class="rounded-lg bg-white p-8 shadow-md transition hover:shadow-lg">
					<div class="mb-4 inline-flex rounded-full bg-green-100 p-3">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-green-600">
							<path stroke-linecap="round" stroke-linejoin="round" d="{feature.icon}" />
						</svg>
					</div>
					<h3 class="mb-3 text-xl font-semibold text-green-800">{feature.title}</h3>
					<p class="text-gray-600">{feature.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Seasonal Offerings -->
<section class="py-16">
	<div class="container mx-auto px-4">
		<h2 class="mb-6 text-center text-3xl font-bold text-green-800 md:text-4xl">Unsere saisonalen Angebote</h2>
		<p class="mb-12 text-center mx-auto max-w-3xl text-lg text-gray-700">Entdecken Sie unsere vielfältigen saisonalen Angebote, darunter selbstangebautes Gemüse im Sommer und frische Kräuter- und Gemüsepflanzen im Frühsommer.</p>
		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
			{#each seasons as season}
				<div class="overflow-hidden rounded-lg shadow-md transition hover:-translate-y-1 hover:shadow-lg">
					<img src="{season.image}" alt="{season.name}" class="h-64 w-full object-cover" />
					<div class="p-6">
						<h3 class="mb-2 text-xl font-semibold text-green-800">{season.name}</h3>
						<p class="text-gray-600">{season.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Testimonials Section -->
<section class="bg-green-50">
	<div class="container mx-auto px-4 py-16">
		<h2 class="text-3xl text-green-800 font-bold text-center mb-12">Was unsere Kunden sagen</h2>
		<div class="grid gap-8 md:grid-cols-3">
			{#each testimonials as testimonial}
				<Testimonial {...testimonial} />
			{/each}
		</div>
		<div class="mt-8 text-center">
			<a href="https://g.co/kgs/gSdWmZr" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-green-700 hover:text-green-900 hover:underline">
				Alle Google Bewertungen ansehen
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="ml-1 h-4 w-4">
					<path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd" />
				</svg>
			</a>
		</div>
	</div>	
</section>
<!-- Opening Hours Section -->
<section class="py-12 bg-white">
	<div class="container mx-auto px-4">
		<div class="flex flex-col md:flex-row items-center justify-between bg-green-50 rounded-lg shadow-md overflow-hidden">
			<div class="p-8 md:w-1/2">
				<h2 class="text-3xl font-bold text-green-800 mb-4">Unsere Öffnungszeiten</h2>
				<p class="text-gray-600 mb-6">Besuchen Sie uns zu unseren Öffnungszeiten und erleben Sie unsere Pflanzenvielfalt vor Ort!</p>
				
				<div class="grid grid-cols-2 gap-y-2 mb-6">
					<div class="font-medium text-gray-700">Montag - Freitag:</div>
					<div class="text-gray-700">8:00 - 18:00 Uhr</div>
					<div class="font-medium text-gray-700">Samstag:</div>
					<div class="text-gray-700">8:00 - 16:00 Uhr</div>
					<div class="font-medium text-gray-700">Sonntag:</div>
					<div class="text-gray-700">Geschlossen</div>
				</div>
				
				<a href="/anfahrt" class="inline-block rounded-full bg-green-600 px-6 py-3 font-medium text-white transition hover:bg-green-700">
					So finden Sie zu uns
				</a>
			</div>
			<div class="md:w-1/2 h-64 md:h-auto">
				<img src="https://images.unsplash.com/photo-1485637701894-09ad422f6de6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Unsere Gärtnerei" class="w-full h-full object-cover" />
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="relative bg-cover bg-center bg-no-repeat py-20" style="background-image: url('https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')">
	<div class="absolute inset-0 bg-green-900/80"></div>
	<div class="relative container mx-auto px-4 text-center text-white">
		<h2 class="mb-6 text-3xl font-bold md:text-4xl">Besuchen Sie uns!</h2>
		<p class="mx-auto mb-8 max-w-2xl text-lg">
			Erleben Sie die Vielfalt unserer Pflanzen vor Ort. Unser Team steht Ihnen mit Rat und Tat zur Seite.
		</p>
		<a
			href="/anfahrt"
			class="inline-block rounded-full bg-white px-8 py-3 font-medium text-green-800 transition hover:bg-gray-100"
			>So finden Sie uns</a
		>
	</div>
</section>
