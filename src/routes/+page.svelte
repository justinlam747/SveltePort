<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import ProjectGrid from '$lib/components/ProjectGrid.svelte';
	import { projects as allProjects } from '$lib/data/projects.js';

	// Show first 4 projects from the shared projects data
	const projects = allProjects.slice(0, 4);


	// Content loads immediately with SSR
	onMount(() => {
		// Page content visible immediately
	});
</script>

<svelte:head>
	<title>Justin | Software Developer Portfolio</title>
	<meta name="description" content="Welcome to Justin's portfolio - featuring innovative software projects and engineering solutions." />
</svelte:head>

<div class="pt-20">
	<!-- Hero Section -->
	<section class="hero-section">
		<HeroSection />
	</section>

	<!-- Projects Section -->
	<section class="projects-section py-8">
		
		<div class="w-full px-8">
			<ProjectGrid {projects} />
		</div>
	</section>
</div>

