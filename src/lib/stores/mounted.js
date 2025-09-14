import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Store to track if component is mounted and hydrated
export const mounted = writable(false);

// Set mounted to true only on the client after hydration
if (browser) {
	// Use requestAnimationFrame to ensure DOM is ready
	requestAnimationFrame(() => {
		mounted.set(true);
	});
}
