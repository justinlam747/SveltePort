<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import ProjectGrid from '$lib/components/ProjectGrid.svelte';
	import { projects } from '$lib/data/projects.js';

	let activeFilter = 'all';
	let filteredProjects = projects;

	// Filter projects based on selected tab
	function filterProjects(filter) {
		activeFilter = filter;
		
		if (filter === 'all') {
			filteredProjects = projects;
		} else {
			filteredProjects = projects.filter(project => project.type === filter);
		}
		
		// Animate the grid when filter changes
		gsap.fromTo('.project-grid', 
			{ opacity: 0, y: 20 }, 
			{ opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
		);
	}

	onMount(() => {
		// Smooth page animation with CSR
		gsap.fromTo('.works-content', 
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
				<p class="text-xl text-gray-600 max-w-2xl mb-8">
					A collection of projects that showcase my expertise in product design, 
					user experience, and creative problem-solving.
				</p>
				
				<!-- Filter Tabs -->
				<div class="flex flex-wrap gap-2 mb-8">
					<button 
						on:click={() => filterProjects('all')}
						class="filter-tab {activeFilter === 'all' ? 'active' : ''}"
					>
						All Projects
					</button>
					<button 
						on:click={() => filterProjects('software')}
						class="filter-tab {activeFilter === 'software' ? 'active' : ''}"
					>
						Software
					</button>
					<button 
						on:click={() => filterProjects('hardware')}
						class="filter-tab {activeFilter === 'hardware' ? 'active' : ''}"
					>
						Hardware
					</button>
				</div>
			</div>

			<div class="project-grid">
				<ProjectGrid projects={filteredProjects} />
			</div>
		</div>
	</div>
</div>

<style>
	.filter-tab {
		@apply px-6 py-3 rounded-full border-2 border-gray-200 text-gray-600 font-medium 
		       transition-all duration-300 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50;
	}
	
	.filter-tab.active {
		@apply bg-blue-600 border-blue-600 text-white shadow-lg transform;
	}
	
	.filter-tab:hover:not(.active) {
		@apply scale-105;
	}
</style>

