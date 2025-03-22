<script>
	// Coordinates for An der Chaussee 108a, 25348 Blomesche Wildnis
	const coordinates = { lat: 53.8069748, lng: 9.4525877 }; // Updated coordinates based on provided Google Maps link
</script>

<svelte:head>
	<title>Anfahrt - Gärtnerei Irina Neer</title>
	<meta
		name="description"
		content="So finden Sie zu uns: Anfahrt und Wegbeschreibung zur Gärtnerei Irina Neer, An der Chaussee 108a, 25348 Blomesche Wildnis."
	/>
</svelte:head>

<!-- Directions Section -->
<section class="py-12">
	<div class="container mx-auto px-4">
		<div class="grid gap-10 md:grid-cols-2">
			<!-- Map and Address -->
			<div>
				<h2 class="mb-5 text-2xl font-medium text-gray-800">
					Unser Standort
				</h2>

				<div class="mb-6 overflow-hidden rounded-md border border-gray-200">
					<iframe
						title="Karte zum Standort der Gärtnerei Irina Neer"
						width="100%"
						height="350"
						frameborder="0"
						allowfullscreen
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
						src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2359.236617952624!2d${coordinates.lng}!3d${coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zR8OkcnRuZXJlaSBJcmluYSBOZWVy!5e0!3m2!1sde!2sde!4v1680000000000!5m2!1sde!2sde`}
						style="border: none"
					></iframe>
				</div>

				<div class="mb-6 bg-white border border-gray-200 p-4 rounded-md">
					<h3 class="text-lg font-medium text-gray-800 mb-3">Adresse</h3>
					<p class="text-gray-700">Gärtnerei Irina Neer</p>
					<p class="text-gray-700">An der Chaussee 108a</p>
					<p class="text-gray-700 mb-4">25348 Blomesche Wildnis</p>

					<div class="mt-4 border-t border-gray-200 pt-4">
						<p class="text-gray-700 flex items-center mb-2">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
							</svg>
							04847 123456
						</p>
						<p class="text-gray-700 flex items-center">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
							info@blumen-neer.de
						</p>
					</div>
				</div>

			
			</div>

			<!-- Directions -->
			<div>
				<h2 class="mb-5 text-2xl font-medium text-gray-800">
					Wegbeschreibung
				</h2>

				<div class="space-y-6">
					<div class="bg-white border border-gray-200 p-4 rounded-md">
						<h3 class="text-lg font-medium text-gray-800 mb-3">Mit dem Auto</h3>
						
						<div class="mb-4">
							<h4 class="font-medium text-gray-700 mb-1">Von Hamburg:</h4>
							<ul class="list-disc pl-5 text-gray-700 mb-2">
								<li>Fahren Sie auf der A23 Richtung Heide</li>
								<li>Nehmen Sie die Ausfahrt Horst/Elmshorn-Nord</li>
								<li>Folgen Sie der Beschilderung Richtung Blomesche Wildnis</li>
								<li>An der Chaussee 108a finden Sie uns auf der rechten Seite</li>
							</ul>
						</div>

						<div>
							<h4 class="font-medium text-gray-700 mb-1">Von Kiel:</h4>
							<ul class="list-disc pl-5 text-gray-700">
								<li>Fahren Sie auf der A23 Richtung Hamburg</li>
								<li>Nehmen Sie die Ausfahrt Itzehoe-Süd</li>
								<li>Folgen Sie der Beschilderung Richtung Blomesche Wildnis</li>
								<li>An der Chaussee 108a finden Sie uns auf der linken Seite</li>
							</ul>
						</div>
					</div>

					<div class="bg-white border border-gray-200 p-4 rounded-md">
						<h3 class="text-lg font-medium text-gray-800 mb-3">Parkplätze</h3>
						<p class="text-gray-700">
							Für unsere Kunden stehen kostenlose Parkplätze direkt vor der Gärtnerei zur Verfügung. Auch für größere
							Fahrzeuge ist ausreichend Platz vorhanden.
						</p>
					</div>

					<div class="bg-white border border-gray-200 p-4 rounded-md">
						<h3 class="text-lg font-medium text-gray-800 mb-3">Tipp</h3>
						<div class="bg-gray-50 p-4 rounded-md border border-gray-200">
							<p class="text-gray-700">
								Unsere Gärtnerei an der Chaussee 108a ist durch das große <span class="font-medium">grüne Schild mit unserem Logo</span> gut zu erkennen. Wenn Sie Schwierigkeiten haben, uns zu finden, zögern Sie nicht, uns anzurufen - wir helfen Ihnen gerne weiter!
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
