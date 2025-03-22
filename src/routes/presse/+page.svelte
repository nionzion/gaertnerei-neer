<script>
	import { pressArticles } from '$lib/data/pressArticles';
	import PressArticles from '$lib/components/PressArticles.svelte';
	import { phone, email } from '$lib/stores/contact';
</script>

<svelte:head>
	<title>Presse - Gärtnerei Irina Neer</title>
	<meta
		name="description"
		content="Presseartikel und Medienberichte über die Gärtnerei Irina Neer in der Blomeschen Wildnis."
	/>
</svelte:head>


<!-- Press Articles Section -->
<section class="py-16">
	<div class="container mx-auto px-4">
		<div class="mx-auto max-w-6xl">
			<div class="mb-6 mx-auto max-w-3xl bg-gray-100 p-6 rounded-2xl">
				<p class="text-center text-lg text-gray-600">
					Hier finden Sie aktuelle Presseartikel und Medienberichte über unsere Gärtnerei, unsere Projekte
					und unsere Arbeit in der Region.
				</p>
			</div>

			<PressArticles articles={pressArticles} />

			<!-- Press Contact -->
			<div class="mt-16 rounded-xl bg-gradient-to-r from-teal-50 to-green-50 p-8 shadow-md">
				<h2 class="mb-4 font-serif text-2xl font-bold text-teal-800">Pressekontakt</h2>
				<p class="mb-6 text-gray-700">
					Sind Sie Journalist oder Medienschaffender und möchten über uns berichten? Kontaktieren Sie
					uns gerne für weitere Informationen, Interviewanfragen oder Bildmaterial.
				</p>
				<div class="flex flex-wrap gap-4">
					<div class="flex items-center gap-2 font-medium text-teal-700">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
						</svg>
						{$phone}
					</div>
					<div class="flex items-center gap-2 font-medium text-teal-700">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
						</svg>
						{$email}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
