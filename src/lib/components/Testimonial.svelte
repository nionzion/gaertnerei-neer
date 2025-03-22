<script lang="ts">
	// Props für ein einzelnes Testimonial
	export let rating: number = 5;
	export let content: string = '';
	export let author: string = '';
	export let authorRole: string = '';
</script>

<div class="rounded-lg bg-white p-6 shadow-md hover:shadow-lg transition flex flex-col">
	<!-- Sternebewertung -->
	<div class="mb-4 flex">
		{#each Array(rating) as _}
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5 text-yellow-500">
				<path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
			</svg>
		{/each}
	</div>

	<!-- Testimonial Text -->
	<p class="mb-6 italic text-gray-600 flex-1">{content}</p>

	<!-- Autor Informationen -->
	<div class="flex items-center">
		<div class="mr-3 h-10 w-10 overflow-hidden rounded-full bg-green-100">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-full w-full text-green-600 p-1">
				<path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
			</svg>
		</div>
		<div>
			<h4 class="font-semibold text-green-800">{author}</h4>
			<p class="text-sm text-gray-600">{authorRole}</p>
		</div>
	</div>
</div>
