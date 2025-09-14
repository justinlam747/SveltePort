<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
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
			.fromTo('.works-content', 
				{ opacity: 0, y: 30 }, 
				{ opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
			);
	});
</script>

<svelte:head>
	<title>Works - Abo</title>
</svelte:head>

<div class="pt-32 pb-20">
	<div class="max-w-6xl mx-auto px-6">
		<div class="works-content">
			<div class="text-center mb-16">
				<h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">My Works</h1>
				<p class="text-xl text-gray-600 max-w-2xl mx-auto">
					A collection of projects that showcase my expertise in product design, 
					user experience, and creative problem-solving.
				</p>
			</div>

			<ProjectGrid on:openProject={openProject} />
		</div>
	</div>
</div>

<!-- Project Modal -->
{#if showModal && selectedProject}
	<ProjectModal project={selectedProject} on:close={closeModal} />
{/if}
