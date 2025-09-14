<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import Navigation from '$lib/components/Navigation.svelte';
	import { mounted } from '$lib/stores/mounted.js';

	// Hydration-safe animations
	onMount(() => {
		const unsubscribe = mounted.subscribe((isMounted) => {
			if (isMounted) {
				// Only run animations after hydration is complete
				gsap.fromTo('.page-content', 
					{ opacity: 0, y: 20 }, 
					{ opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
				);
			}
		});

		return unsubscribe;
	});
</script>

<svelte:head>
	<title>Justin - Software Developer</title>
	<meta name="description" content="Software developer passionate about leveraging data, technology, and design to create impactful solutions." />
</svelte:head>

<div class="min-h-screen bg-gray-50">
	<Navigation />
	<main class="page-content">
		<slot />
	</main>
</div>
