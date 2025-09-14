<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import ProjectGrid from '$lib/components/ProjectGrid.svelte';
	import { projects } from '$lib/data/projects.js';


	onMount(() => {
		// Page entrance animation
		gsap.timeline()
			.fromTo('.works-content', 
				{ opacity: 0, y: 30 }, 
				{ opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
			);
	});
</script>

<svelte:head>
	<title>Works - Justin</title>
</svelte:head>

<div class="pt-32 pb-20">
	<div class="max-w-6xl mx-auto px-6">
		<div class="works-content">
			<div class="text-start mb-16">
				<h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">My Works</h1>
				<p class="text-xl text-gray-600 max-w-2xl ">
					A collection of projects that showcase my expertise in product design, 
					user experience, and creative problem-solving.
				</p>
			</div>

			<ProjectGrid {projects} />
		</div>
	</div>
</div>

