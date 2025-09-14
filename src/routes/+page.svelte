<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import ProjectGrid from '$lib/components/ProjectGrid.svelte';
	import ProjectModal from '$lib/components/ProjectModal.svelte';

	let selectedProject = null;
	let showModal = false;

	function openProject(event) {
		selectedProject = event.detail;
		showModal = true;
	}

	function closeModal() {
		showModal = false;
		selectedProject = null;
	}

	onMount(() => {
		// Page entrance animation
		gsap.timeline()
			.fromTo('.hero-section', 
				{ opacity: 0, y: 30 }, 
				{ opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
			)
			.fromTo('.projects-section', 
				{ opacity: 0, y: 30 }, 
				{ opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, 
				'-=0.4'
			);
	});
</script>

<svelte:head>
	<title>Abo - Product Designer Portfolio</title>
</svelte:head>

<div class="pt-20">
	<!-- Hero Section -->
	<section class="hero-section">
		<HeroSection />
	</section>

	<!-- Projects Section -->
	<section class="projects-section py-20">
		<div class="max-w-6xl mx-auto px-6">
			<div class="text-center mb-16">
				<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Works</h2>
				<p class="text-gray-600 max-w-2xl mx-auto">
					A collection of projects showcasing my expertise in product design, 
					user experience, and creative problem-solving.
				</p>
			</div>
			
			<ProjectGrid on:openProject={openProject} />
		</div>
	</section>
</div>

<!-- Project Modal -->
{#if showModal && selectedProject}
	<ProjectModal project={selectedProject} on:close={closeModal} />
{/if}
