<script>
	import { scale } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';

	export let seasonData;
	export let currentDay;
	export let formattedTime;
	export let isOpen;
	export let currentHours;
</script>

{#if seasonData}
	<div class="w-full overflow-hidden">
		<div class="flex flex-col sm:flex-row gap-4">
			<!-- Spalte: Status und heutige Zeiten (zentriert auf Mobile) -->
			<div class="text-center sm:text-left sm:w-2/5">
				<!-- Status Indicator -->
				<div class="flex flex-wrap items-center gap-2 mb-2 justify-center sm:justify-start">
					{#if isOpen}
						<div class="inline-flex items-center gap-1 text-green-700" in:scale={{ duration: 400, delay: 300, easing: elasticOut, start: 0.8 }}>
							<span class="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
							<span class="text-sm font-medium">Geöffnet</span>
						</div>
					{:else}
						<div class="inline-flex items-center gap-1 text-red-700" in:scale={{ duration: 400, delay: 300, easing: elasticOut, start: 0.8 }}>
							<span class="h-2 w-2 rounded-full bg-red-500"></span>
							<span class="text-sm font-medium">Geschlossen</span>
						</div>
					{/if}
					<span class="text-xs text-gray-500 self-center">({formattedTime})</span>
				</div>

				<!-- Today's Hours -->
				<div class="mt-1">
					<div class="flex flex-wrap items-center gap-1 justify-center sm:justify-start">
						<span class="font-medium text-gray-700">{currentDay}:</span>
						{#each currentHours as timeRange}
							<span class="text-sm text-gray-600">{timeRange}</span>
						{/each}
					</div>
				</div>
			</div>

			<!-- Spalte: Wochenübersicht (zentriert auf Mobile) -->
			<div class="text-center sm:text-left sm:w-3/5 mt-5 sm:mt-0">
				<div class="text-xs text-gray-600">
					{#each seasonData.hours as day, i}
						{#if i < 7} <!-- Zeige alle Wochentage an -->
							<div class="mb-1 {day.day === currentDay ? 'font-medium' : ''}">
								<div class="flex items-start justify-center sm:justify-start">
									<span class="inline-block w-16 sm:w-24 text-left sm:text-right sm:pr-2">{day.day}:</span>
									<span class="inline-block text-left sm:text-right">{day.times.join(', ')}</span>
								</div>
							</div>
						{/if}
					{/each}
					<a href="/oeffnungszeiten" class="mt-3 block text-xs text-purple-700 hover:underline text-center sm:text-right">Alle Öffnungszeiten →</a>
				</div>
			</div>
		</div>
	</div>
{/if}
