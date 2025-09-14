<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import Navigation from '$lib/components/Navigation.svelte';

	onMount(() => {
		// Initialize GSAP animations
		gsap.fromTo('.page-content', 
			{ opacity: 0, y: 20 }, 
			{ opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
		);
	});
</script>

<svelte:head>
	<title>Abo - Product Designer</title>
	<meta name="description" content="Product designer with 7 years of experience creating user-centric, delightful, and human experiences." />
</svelte:head>

<div class="min-h-screen bg-gray-50">
	<Navigation />
	<main class="page-content">
		<slot />
	</main>
</div>
