<script>
	import { fade, fly, scale, slide } from 'svelte/transition';
	import { elasticOut, backOut, quintOut } from 'svelte/easing';
	import { currentSeason } from '$lib/stores/season';
	import OpeningHoursHighlight from '$lib/components/OpeningHoursHighlight.svelte';

	const openingHours = [
		{
			period: 'März und April',
			hours: [
				{ day: 'Montag', times: ['09.00 - 18.00 Uhr'] },
				{ day: 'Dienstag', times: ['09.00 - 18.00 Uhr'] },
				{ day: 'Mittwoch', times: ['09.00 - 18.00 Uhr'] },
				{ day: 'Donnerstag', times: ['09.00 - 18.00 Uhr'] },
				{ day: 'Freitag', times: ['09.00 - 18.00 Uhr'] },
				{ day: 'Samstag', times: ['10.00 - 18.00 Uhr'] },
				{ day: 'Sonntag', times: ['11.00 - 16.00 Uhr'] }
			]
		},
		{
			period: 'Mai und Juni',
			hours: [
				{ day: 'Montag', times: ['09.00 - 19.00 Uhr'] },
				{ day: 'Dienstag', times: ['09.00 - 19.00 Uhr'] },
				{ day: 'Mittwoch', times: ['09.00 - 19.00 Uhr'] },
				{ day: 'Donnerstag', times: ['09.00 - 19.00 Uhr'] },
				{ day: 'Freitag', times: ['09.00 - 19.00 Uhr'] },
				{ day: 'Samstag', times: ['09.00 - 18.00 Uhr'] },
				{ day: 'Sonntag', times: ['11.00 - 16.00 Uhr'] }
			]
		},
		{
			period: 'Juli bis Oktober',
			hours: [
				{ day: 'Montag', times: ['09.00 - 12.00 Uhr', '14.00 - 18.00 Uhr'] },
				{ day: 'Dienstag', times: ['09.00 - 12.00 Uhr', '14.00 - 18.00 Uhr'] },
				{ day: 'Mittwoch', times: ['09.00 - 12.00 Uhr', '14.00 - 18.00 Uhr'] },
				{ day: 'Donnerstag', times: ['09.00 - 12.00 Uhr', '14.00 - 18.00 Uhr'] },
				{ day: 'Freitag', times: ['09.00 - 12.00 Uhr', '14.00 - 18.00 Uhr'] },
				{ day: 'Samstag', times: ['09.00 - 15.00 Uhr'] },
				{ day: 'Sonntag', times: ['Geschlossen'] }
			]
		}
	];

	function getCurrentSeason() {
		const today = new Date();
		const month = today.getMonth() + 1; // JavaScript month is 0-indexed
		
		if (month === 3 || month === 4) {
			return 'März und April';
		} else if (month === 5 || month === 6) {
			return 'Mai und Juni';
		} else if (month >= 7 && month <= 10) {
			return 'Juli bis Oktober';
		} else {
			return null; // Off-season
		}
	}

	function getCurrentDay() {
		const today = new Date('2025-03-22'); // Aktuelles Datum (22.03.2025)
		const days = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
		return days[today.getDay()];
	}

	function getTodaysHours() {
		const day = getCurrentDay();
		const season = getCurrentSeason();
		
		if (!season) return { times: ['Winterpause - geschlossen'], isOpen: false };
		
		const seasonData = openingHours.find(s => s.period === season);
		if (!seasonData) return { times: ['Nicht verfügbar'], isOpen: false };
		
		const dayData = seasonData.hours.find(d => d.day === day);
		if (!dayData) return { times: ['Nicht verfügbar'], isOpen: false };
		
		// Überprüfen, ob aktuell geöffnet ist (Uhrzeit aus dem Metadata verwenden)
		const now = new Date();
		let isOpen = false;
		
		if (dayData.times[0] !== 'Geschlossen') {
			for (const timeRange of dayData.times) {
				if (timeRange === 'Geschlossen') continue;
				
				const [start, end] = timeRange.split(' - ');
				const [startHour, startMinute] = start.split('.').map(Number);
				const [endHour, endMinute] = end.replace(' Uhr', '').split('.').map(Number);
				
				const startTime = new Date(now);
				startTime.setHours(startHour, startMinute, 0);
				
				const endTime = new Date(now);
				endTime.setHours(endHour, endMinute, 0);
				
				if (now >= startTime && now <= endTime) {
					isOpen = true;
					break;
				}
			}
		}
		
		return {
			times: dayData.times,
			isOpen
		};
	}

	const currentDay = getCurrentDay();
	const today = new Date();
	const formattedDate = `${today.getDate().toString().padStart(2, '0')}.${(today.getMonth() + 1).toString().padStart(2, '0')}.${today.getFullYear()}`;
	const todaysHours = getTodaysHours();
	const currentTime = new Date();
	const formattedTime = `${currentTime.getHours().toString().padStart(2, '0')}:${currentTime.getMinutes().toString().padStart(2, '0')} Uhr`;

</script>

<svelte:head>
	<title>Öffnungszeiten - Gärtnerei Irina Neer</title>
	<meta
		name="description"
		content="Die Öffnungszeiten der Gärtnerei Irina Neer in der Blomeschen Wildnis."
	/>
</svelte:head>

<!-- Opening Hours Section -->
<section class="py-16">
	<div class="container mx-auto px-4">
		<OpeningHoursHighlight
		seasonData={openingHours.find(s => s.period === getCurrentSeason())}
		currentDay={currentDay}
		formattedDate={formattedDate}
		formattedTime={formattedTime}
		isOpen={todaysHours.isOpen}
		currentHours={todaysHours.times}
	/>
		
		<!-- All Seasons -->
		<div class="grid gap-12 md:grid-cols-3">
			{#each openingHours as season}
				<div class={`rounded-xl p-6 shadow-lg ${season.period === getCurrentSeason() ? 'bg-gradient-to-br from-indigo-50 to-purple-50 ring-2 ring-indigo-200' : 'bg-white'}`}>
					<h3 class="mb-4 border-b border-gray-200 pb-2 text-xl font-semibold text-indigo-900">{season.period}</h3>
					
					<div class="space-y-4">
						{#each season.hours as day}
							<div class="flex items-start justify-between">
								<span class="font-medium text-slate-800">{day.day}:</span>
								<div class="text-right">
									{#each day.times as time}
										<span class="block text-slate-700">{time}</span>
									{/each}
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>

		<!-- Additional Info -->
		<div class="mt-16 rounded-xl bg-white p-6 shadow-md">
			<h3 class="mb-4 text-xl font-semibold text-indigo-900">Weitere Informationen</h3>
			<div class="space-y-4 text-slate-700">
				<p>
					An Feiertagen können besondere Öffnungszeiten gelten. Bitte informieren Sie sich vorab.
				</p>
				<p>
					Für individuelle Beratungstermine außerhalb der regulären Öffnungszeiten kontaktieren Sie uns bitte telefonisch oder per E-Mail.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
	<div class="container mx-auto px-4">
		<div class="mx-auto max-w-3xl text-center">
			<h2 class="mb-6 text-3xl font-bold text-indigo-900">Haben Sie Fragen?</h2>
			<p class="mb-8 text-lg text-slate-700">
				Wir helfen Ihnen gerne bei Fragen zu unseren Öffnungszeiten oder vereinbaren individuelle Beratungstermine.
			</p>
			<div class="flex flex-col sm:flex-row justify-center gap-4">
				<a href="/kontakt" class="rounded-md bg-purple-600 px-6 py-3 font-medium text-white shadow-md transition hover:bg-purple-700 hover:shadow-lg">
					Kontakt aufnehmen
				</a>
				<a href="/anfahrt" class="rounded-md bg-white px-6 py-3 font-medium text-indigo-700 shadow-md transition hover:bg-indigo-50 hover:shadow-lg">
					Anfahrt planen
				</a>
			</div>
		</div>
	</div>
</section>
