export const seasons = [
    {
        period: 'März und April',
        startDate: new Date('2025-03-01'),
        endDate: new Date('2025-04-30'),
        days: [
            { day: 'Montag', hours: '09:00 - 18:00' },
            { day: 'Dienstag', hours: '09:00 - 18:00' },
            { day: 'Mittwoch', hours: '09:00 - 18:00' },
            { day: 'Donnerstag', hours: '09:00 - 18:00' },
            { day: 'Freitag', hours: '09:00 - 18:00' },
            { day: 'Samstag', hours: '10:00 - 18:00' },
            { day: 'Sonntag', hours: '11:00 - 16:00' }
        ]
    },
    {
        period: 'Mai und Juni',
        startDate: new Date('2025-05-01'),
        endDate: new Date('2025-06-30'),
        days: [
            { day: 'Montag', hours: '09:00 - 19:00' },
            { day: 'Dienstag', hours: '09:00 - 19:00' },
            { day: 'Mittwoch', hours: '09:00 - 19:00' },
            { day: 'Donnerstag', hours: '09:00 - 19:00' },
            { day: 'Freitag', hours: '09:00 - 19:00' },
            { day: 'Samstag', hours: '09:00 - 18:00' },
            { day: 'Sonntag', hours: '11:00 - 16:00' }
        ]
    },
    {
        period: 'Juli bis Oktober',
        startDate: new Date('2025-07-01'),
        endDate: new Date('2025-10-31'),
        days: [
            { day: 'Montag', hours: '09:00 - 12:00, 14:00 - 18:00' },
            { day: 'Dienstag', hours: '09:00 - 12:00, 14:00 - 18:00' },
            { day: 'Mittwoch', hours: '09:00 - 12:00, 14:00 - 18:00' },
            { day: 'Donnerstag', hours: '09:00 - 12:00, 14:00 - 18:00' },
            { day: 'Freitag', hours: '09:00 - 12:00, 14:00 - 18:00' },
            { day: 'Samstag', hours: '09:00 - 15:00' },
            { day: 'Sonntag', hours: 'Geschlossen' }
        ]
    },
    {
        period: 'Winterpause',
        startDate: new Date('2025-11-01'),
        endDate: new Date('2025-12-31'),
        days: [
            { day: 'Montag', hours: '10:00 - 16:00' },
            { day: 'Dienstag', hours: '10:00 - 16:00' },
            { day: 'Mittwoch', hours: '10:00 - 16:00' },
            { day: 'Donnerstag', hours: '10:00 - 16:00' },
            { day: 'Freitag', hours: '10:00 - 16:00' },
            { day: 'Samstag', hours: '10:00 - 14:00' },
            { day: 'Sonntag', hours: 'Geschlossen' }
        ]
    }
];

export function getCurrentSeason() {
    const today = new Date();
    const currentYear = today.getFullYear();
    
    // Aktualisiere die Jahreszahlen für das aktuelle Jahr
    const seasonsWithCurrentYear = seasons.map(season => ({
        ...season,
        startDate: new Date(currentYear, season.startDate.getMonth(), season.startDate.getDate()),
        endDate: new Date(currentYear, season.endDate.getMonth(), season.endDate.getDate())
    }));
    
    for (const season of seasonsWithCurrentYear) {
        if (today >= season.startDate && today <= season.endDate) {
            return season;
        }
    }
    
    // Wenn kein passender Zeitraum gefunden wird, zurück zur Winterpause
    return seasonsWithCurrentYear[3];
}
