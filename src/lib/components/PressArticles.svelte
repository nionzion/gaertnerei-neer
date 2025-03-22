<script>
	export let articles = [];
</script>

<!-- Press Articles Grid -->
<div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
	{#each articles as article}
		<div class="flex h-full flex-col overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
			<div class="relative h-48 overflow-hidden">
				<img
					src="{article.image}?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
					alt={article.title}
					class="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
				/>
			</div>
			<div class="flex flex-1 flex-col p-6">
				<div class="mb-2 flex items-center justify-between">
					<span class="text-sm font-medium text-teal-600">{article.source}</span>
					<span class="text-sm text-gray-500">{article.date}</span>
				</div>
				<h3 class="mb-3 font-serif text-xl font-bold leading-tight text-gray-900">
					{article.title}
				</h3>
				<p class="mb-5 text-gray-600">{article.excerpt}</p>
				<a
					href={article.url}
					target="_blank"
					rel="noopener noreferrer"
					class="mt-auto inline-flex items-center font-medium text-teal-700 transition hover:text-teal-900"
				>
					Artikel lesen
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
		</div>
	{/each}
</div>
