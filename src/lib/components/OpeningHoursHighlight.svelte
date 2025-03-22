<script>
	import { fly, scale } from 'svelte/transition';
	import { quintOut, elasticOut } from 'svelte/easing';

	export let seasonData;
	export let currentDay;
	export let formattedDate;
	export let formattedTime;
	export let isOpen;
	export let currentHours;
</script>

{#if seasonData}
	<div class="mb-12 rounded-xl overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50 p-4 sm:p-6 shadow-xl transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-1" in:fly={{ y: 30, duration: 700, delay: 300, easing: quintOut }}>
		<!-- Status Header -->
		<div class="mb-4 sm:mb-6 flex flex-wrap items-center justify-between pb-3 sm:pb-4 border-b border-indigo-100">
			<div class="flex flex-wrap items-center gap-2 sm:gap-3">
				<span class="text-xs sm:text-sm font-medium text-slate-500">{formattedDate}</span>
				<span class="text-xs sm:text-sm font-medium text-slate-500">{formattedTime}</span>
			</div>
			{#if isOpen}
				<div class="flex items-center gap-2 px-2 sm:px-3 py-1 rounded-full bg-indigo-100 text-indigo-800" in:scale={{ duration: 400, delay: 800, easing: elasticOut, start: 0.8 }}>
					<span class="h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
					<span class="text-xs sm:text-sm font-medium">Geöffnet</span>
				</div>
			{:else}
				<div class="flex items-center gap-2 px-2 sm:px-3 py-1 rounded-full bg-red-100 text-red-800" in:scale={{ duration: 400, delay: 800, easing: elasticOut, start: 0.8 }}>
					<span class="h-2 w-2 rounded-full bg-red-500"></span>
					<span class="text-xs sm:text-sm font-medium">Geschlossen</span>
				</div>
			{/if}
		</div>

		<!-- Today's Info -->
		<div class="mb-5 sm:mb-6">
			<h2 class="text-xl sm:text-2xl font-semibold text-indigo-900">Aktuelle Öffnungszeiten</h2>
			<p class="mt-1 text-sm sm:text-base text-slate-600">
				<span class="font-semibold">{currentDay}, {formattedDate}</span>
			</p>
			<div class="mt-2 sm:mt-3 flex flex-wrap items-center gap-2">
				<span class="font-semibold text-indigo-900">Heute:</span>
				{#each currentHours as timeRange}
					<span class="text-sm sm:text-base text-slate-700">{timeRange}</span>
				{/each}
			</div>
		</div>

		<!-- Season Info -->
		<div class="bg-white bg-opacity-70 rounded-lg p-3 shadow-sm">
			<h3 class="mb-2 text-sm font-medium text-indigo-900">{seasonData.period}</h3>
			<div class="space-y-1">
				{#each seasonData.hours as day}
					<div class="flex justify-between items-center text-sm py-1 border-b border-gray-100 {day.day === currentDay ? 'text-indigo-800 font-medium' : 'text-slate-700'}">
						<span>{day.day}</span>
						<div class="text-right">
							{#each day.times as time, i}
								<span class="text-xs {i > 0 ? 'ml-1' : ''} {time === 'Geschlossen' ? 'italic' : ''}">{time}</span>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
{/if}
