import { derived } from 'svelte/store';
import { getCurrentSeason } from '$lib/data/seasons';
export const currentSeason = derived([], () => getCurrentSeason());
