<script>
	import { phone, email } from '$lib/stores/contact';

	let formData = $state({
		name: '',
		email: '',
		subject: '',
		message: ''
	});
	let formSubmitted = $state(false);
	let formError = $state(false);

	function handleSubmit() {
		// Simple validation
		if (!formData.name || !formData.email || !formData.message) {
			formError = true;
			return;
		}

		// In a real application, you would send this data to a server
		console.log('Form submitted:', formData);
		
		// Reset form and show success message
		formError = false;
		formSubmitted = true;
		formData = {
			name: '',
			email: '',
			subject: '',
			message: ''
		};
	}

	function resetForm() {
		formSubmitted = false;
	}
</script>

<svelte:head>
	<title>Kontakt - Gärtnerei Irina Neer</title>
	<meta
		name="description"
		content="Kontaktieren Sie die Gärtnerei Irina Neer für Fragen, Beratung oder Anregungen. Wir freuen uns auf Ihre Nachricht!"
	/>
</svelte:head>


<!-- Contact Section -->
<section class="py-16">
	<div class="container mx-auto px-4">
		<div class="grid gap-12 md:grid-cols-2">
			<!-- Contact Information -->
			<div>
				<h2 class="mb-6 text-3xl font-bold text-green-800">Sprechen Sie uns an</h2>
				<p class="mb-8 text-lg text-gray-700">
					Haben Sie Fragen zu unserem Sortiment, benötigen Sie eine Beratung oder haben Sie Anregungen für uns? Wir
					freuen uns, von Ihnen zu hören!
				</p>

				<div class="mb-10 space-y-6">
					<div class="flex items-start">
						<div class="mr-4 inline-flex rounded-full bg-green-100 p-3">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-green-600">
								<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
								<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
							</svg>
						</div>
						<div>
							<h3 class="text-xl font-semibold text-green-800">Adresse</h3>
							<p class="mt-2 text-gray-600">An der Chaussee 108a</p>
							<p class="text-gray-600">25348 Blomesche Wildnis</p>
						</div>
					</div>

					<div class="flex items-start">
						<div class="mr-4 inline-flex rounded-full bg-green-100 p-3">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-green-600">
								<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
							</svg>
						</div>
						<div>
							<h3 class="text-xl font-semibold text-green-800">Telefon</h3>
							<p class="mt-2 text-gray-600">{$phone}</p>
						</div>
					</div>

					<div class="flex items-start">
						<div class="mr-4 inline-flex rounded-full bg-green-100 p-3">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-green-600">
								<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
							</svg>
						</div>
						<div>
							<h3 class="text-xl font-semibold text-green-800">E-Mail</h3>
							<p class="mt-2 text-gray-600">{$email}</p>
						</div>
					</div>

				</div>
			</div>

			<!-- Contact Form -->
			<div>
				<div class="rounded-lg bg-white p-8 shadow-lg">
					{#if formSubmitted}
						<div class="text-center">
							<div class="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8 text-green-600">
									<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<h3 class="mb-2 text-2xl font-semibold text-green-800">Vielen Dank!</h3>
							<p class="mb-6 text-gray-600">
								Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns so schnell wie möglich bei Ihnen
								melden.
							</p>
							<button
								on:click={resetForm}
								class="rounded-full bg-green-600 px-6 py-3 font-medium text-white transition hover:bg-green-700"
								>Neue Nachricht</button
							>
						</div>
					{:else}
						<h3 class="mb-6 text-2xl font-semibold text-green-800">Senden Sie uns eine Nachricht</h3>

						{#if formError}
							<div class="mb-6 rounded-md bg-red-50 p-4">
								<p class="text-red-800">Bitte füllen Sie alle Pflichtfelder aus.</p>
							</div>
						{/if}

						<form on:submit|preventDefault={handleSubmit}>
							<div class="mb-4">
								<label for="name" class="mb-2 block text-sm font-medium text-gray-700">Name*</label>
								<input
									type="text"
									id="name"
									bind:value={formData.name}
									class="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
									required
								/>
							</div>

							<div class="mb-4">
								<label for="email" class="mb-2 block text-sm font-medium text-gray-700">E-Mail*</label>
								<input
									type="email"
									id="email"
									bind:value={formData.email}
									class="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
									required
								/>
							</div>

							<div class="mb-4">
								<label for="subject" class="mb-2 block text-sm font-medium text-gray-700">Betreff</label>
								<input
									type="text"
									id="subject"
									bind:value={formData.subject}
									class="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
								/>
							</div>

							<div class="mb-6">
								<label for="message" class="mb-2 block text-sm font-medium text-gray-700">Nachricht*</label>
								<textarea
									id="message"
									bind:value={formData.message}
									rows="5"
									class="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
									required
								></textarea>
							</div>

							<div class="text-right">
								<button
									type="submit"
									class="rounded-full bg-green-600 px-6 py-3 font-medium text-white transition hover:bg-green-700"
									>Nachricht senden</button
								>
							</div>
						</form>
					{/if}
				</div>
			</div>
		</div>
	</div>
</section>
