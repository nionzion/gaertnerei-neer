<script lang="ts">
	import { phone, email } from '$lib/stores/contact';
	import OpeningHoursCompact from './OpeningHoursCompact.svelte';
	import { currentSeason } from '$lib/stores/season';

	// Aktuelles Datum und Wochentag bestimmen
	const now = new Date();
	const weekdays = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
	const currentDay = weekdays[now.getDay()];

	// Datum und Zeit formatieren
	const formattedDate = now.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
	const formattedTime = now.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });

	// Aktuelle Saison-Daten ermitteln
	const season = $currentSeason;
	
	// Daten für die OpeningHoursCompact-Komponente aufbereiten
	const seasonData = {
		period: season.period,
		hours: season.days.map(day => ({
			day: day.day,
			times: [day.hours]
		}))
	};

	// Aktuelle u00d6ffnungszeiten fu00fcr heute herausfinden
	const todaysHours = season.days.find(day => day.day === currentDay);
	const currentHours = todaysHours ? [todaysHours.hours] : ['Geschlossen'];

	// Pru00fcfen, ob aktuell geu00f6ffnet ist (mit Uhrzeit-u00dcberpru00fcfung)
	function isCurrentlyOpen(hours: string, currentTime: Date): boolean {
		// Wenn geschlossen, return false
		if (hours === 'Geschlossen') return false;

		// Aktuelle Stunden und Minuten
		const currentHour = currentTime.getHours();
		const currentMinute = currentTime.getMinutes();
		const currentTotalMinutes = currentHour * 60 + currentMinute;

		// Zeiten aufteilen (Form: "10:00 - 18:00" oder "10:00 - 13:00, 15:00 - 18:00")
		const timeRanges = hours.split(', ');
		
		for (const range of timeRanges) {
			// Einzelne Zeitbereiche verarbeiten (Form: "10:00 - 18:00")
			const [startTime, endTime] = range.split(' - ');
			
			// Start- und Endzeit in Minuten umrechnen
			const [startHour, startMinute] = startTime.split(':').map(num => parseInt(num, 10));
			const [endHour, endMinute] = endTime.split(':').map(num => parseInt(num, 10));
			
			const startTotalMinutes = startHour * 60 + startMinute;
			const endTotalMinutes = endHour * 60 + endMinute;
			
			// Prüfen, ob die aktuelle Zeit im Zeitbereich liegt
			if (currentTotalMinutes >= startTotalMinutes && currentTotalMinutes <= endTotalMinutes) {
				return true;
			}
		}
		
		return false;
	}

	const isOpen = todaysHours && isCurrentlyOpen(todaysHours.hours, now);
</script>

<footer class="relative overflow-hidden bg-gray-100 text-gray-800 shadow-md transform transition-all duration-700 hover:shadow-lg">
	<div class="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
	<div class="container relative mx-auto px-4 py-12 flex justify-center">
		<div class="max-w-5xl w-full">
			<div class="grid grid-cols-1 gap-10 md:grid-cols-3 text-center md:text-left">
				<div>
					<h3 class="mb-4 font-serif text-2xl font-medium text-gray-800">Gärtnerei Irina Neer</h3>
					<p class="text-gray-600 mb-2 text-sm">Professionelle Gartengestaltung und Pflanzexperten seit 1995.</p>
					<p class="text-gray-600 text-sm">Wir schaffen Gartenparadiese, die die Seele berühren.</p>
				</div>

				<div>
					<h3 class="mb-4 font-serif text-2xl font-medium text-gray-800">Kontakt</h3>
					<div class="flex flex-col space-y-4">
						<p class="flex items-center gap-2 text-gray-600 text-sm justify-center md:justify-start">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 flex-shrink-0">
								<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
							</svg>
							{$phone}
						</p>
						<p class="flex items-center gap-2 text-gray-600 text-sm justify-center md:justify-start">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 flex-shrink-0">
								<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
							</svg>
							{$email}
						</p>
						<p class="flex items-start gap-2 text-gray-600 text-sm justify-center md:justify-start">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 flex-shrink-0 mt-0.5">
								<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
								<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
							</svg>
							<span>An der Chaussee 108a, 25348 Blomesche Wildnis</span>
						</p>
					</div>
				</div>

				<div>
					<h3 class="mb-5 font-serif text-2xl font-medium text-gray-800">Aktuelle Öffnungszeiten</h3>
					<OpeningHoursCompact
						seasonData={seasonData}
						currentDay={currentDay}
						formattedTime={formattedTime}
						isOpen={isOpen}
						currentHours={currentHours}
					/>
				</div>
			</div>

		<div class="mt-10 border-t border-gray-200 pt-6 text-center text-gray-500">
			<div class="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-6">
				<span>&copy; {new Date().getFullYear()} Gärtnerei Irina Neer. Alle Rechte vorbehalten.</span>	
				<div class="flex gap-4">
					<a href="/impressum" class="hover:text-gray-800 transition-colors">Impressum</a>
					<a href="/datenschutz" class="hover:text-gray-800 transition-colors">Datenschutz</a>
				</div>
			</div>
		</div>
	</div>
</footer>
