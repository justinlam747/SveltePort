<script>
	import { onMount, createEventDispatcher } from 'svelte';
	import { gsap } from 'gsap';

	export let project;
	
	const dispatch = createEventDispatcher();
	
	let modalRef;
	let contentRef;
	let activeTab = 'overview';
	
	function closeModal() {
		// Exit animation
		gsap.timeline()
			.to(contentRef, { scale: 0.9, opacity: 0, duration: 0.3, ease: 'power2.in' })
			.to(modalRef, { opacity: 0, duration: 0.2 }, '-=0.1')
			.call(() => dispatch('close'));
	}
	
	function handleKeydown(event) {
		if (event.key === 'Escape') {
			closeModal();
		}
	}
	
	function switchTab(tab) {
		activeTab = tab;
		
		// Animate tab content
		gsap.fromTo('.tab-content', 
			{ opacity: 0, y: 20 }, 
			{ opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
		);
	}
	
	onMount(() => {
		// Entrance animation
		gsap.timeline()
			.fromTo(modalRef, { opacity: 0 }, { opacity: 1, duration: 0.3 })
			.fromTo(contentRef, 
				{ scale: 0.9, opacity: 0 }, 
				{ scale: 1, opacity: 1, duration: 0.4, ease: 'power2.out' }, 
				'-=0.2'
			);
		
		// Focus trap
		contentRef?.focus();
	});
</script>

<svelte:window on:keydown={handleKeydown} />

<!-- Modal Backdrop -->
<div 
	bind:this={modalRef}
	class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
	on:click={closeModal}
	role="dialog"
	aria-modal="true"
>
	<!-- Modal Content -->
	<div 
		bind:this={contentRef}
		class="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
		on:click|stopPropagation
		tabindex="-1"
	>
		<!-- Header -->
		<div class="relative p-6 border-b border-gray-100">
			<div class="flex items-start justify-between">
				<div>
					<h2 class="text-2xl font-bold text-gray-900 mb-2">{project.title}</h2>
					<p class="text-gray-600">{project.subtitle}</p>
					<div class="flex items-center space-x-4 mt-3">
						<span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
							{project.category}
						</span>
						<span class="text-gray-500 text-sm">{project.year}</span>
					</div>
				</div>
				
				<button 
					on:click={closeModal}
					class="p-2 hover:bg-gray-100 rounded-full transition-colors"
					aria-label="Close modal"
				>
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
					</svg>
				</button>
			</div>
		</div>
		
		<!-- Tabs -->
		<div class="border-b border-gray-100">
			<nav class="flex space-x-8 px-6">
				<button 
					class="py-4 text-sm font-medium border-b-2 transition-colors {activeTab === 'overview' ? 'border-primary-500 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700'}"
					on:click={() => switchTab('overview')}
				>
					Overview
				</button>
				<button 
					class="py-4 text-sm font-medium border-b-2 transition-colors {activeTab === 'technologies' ? 'border-primary-500 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700'}"
					on:click={() => switchTab('technologies')}
				>
					Technologies
				</button>
				<button 
					class="py-4 text-sm font-medium border-b-2 transition-colors {activeTab === 'architecture' ? 'border-primary-500 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700'}"
					on:click={() => switchTab('architecture')}
				>
					Project Tree
				</button>
			</nav>
		</div>
		
		<!-- Content -->
		<div class="p-6 max-h-96 overflow-y-auto">
			<div class="tab-content">
				{#if activeTab === 'overview'}
					<div class="space-y-6">
						<div>
							<h3 class="text-lg font-semibold text-gray-900 mb-3">Project Description</h3>
							<p class="text-gray-600 leading-relaxed">{project.description}</p>
						</div>
						
						<div>
							<h3 class="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
							<ul class="space-y-2 text-gray-600">
								{#if project.id === 1}
									<li class="flex items-center space-x-2">
										<svg class="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
											<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
										</svg>
										<span>Real-time game tracking and statistics</span>
									</li>
									<li class="flex items-center space-x-2">
										<svg class="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
											<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
										</svg>
										<span>Social features and community building</span>
									</li>
									<li class="flex items-center space-x-2">
										<svg class="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
											<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
										</svg>
										<span>Tournament management system</span>
									</li>
								{:else if project.id === 2}
									<li class="flex items-center space-x-2">
										<svg class="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
											<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
										</svg>
										<span>Real-time financial analytics</span>
									</li>
									<li class="flex items-center space-x-2">
										<svg class="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
											<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
										</svg>
										<span>Risk assessment algorithms</span>
									</li>
									<li class="flex items-center space-x-2">
										<svg class="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
											<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
										</svg>
										<span>Secure transaction processing</span>
									</li>
								{:else}
									<li class="flex items-center space-x-2">
										<svg class="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
											<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
										</svg>
										<span>Advanced user management</span>
									</li>
									<li class="flex items-center space-x-2">
										<svg class="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
											<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
										</svg>
										<span>Comprehensive analytics dashboard</span>
									</li>
									<li class="flex items-center space-x-2">
										<svg class="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
											<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
										</svg>
										<span>Scalable architecture</span>
									</li>
								{/if}
							</ul>
						</div>
					</div>
				
				{:else if activeTab === 'technologies'}
					<div class="space-y-6">
						<div>
							<h3 class="text-lg font-semibold text-gray-900 mb-4">Tech Stack</h3>
							<div class="grid grid-cols-2 md:grid-cols-3 gap-3">
								{#each project.technologies as tech}
									<div class="bg-gray-50 rounded-lg p-3 text-center">
										<span class="text-sm font-medium text-gray-700">{tech}</span>
									</div>
								{/each}
							</div>
						</div>
						
						<div>
							<h3 class="text-lg font-semibold text-gray-900 mb-3">Development Approach</h3>
							<div class="bg-gray-50 rounded-lg p-4">
								<p class="text-gray-600 text-sm leading-relaxed">
									{project.projectTree.buildProcess}
								</p>
							</div>
						</div>
					</div>
				
				{:else if activeTab === 'architecture'}
					<div class="space-y-6">
						<div>
							<h3 class="text-lg font-semibold text-gray-900 mb-4">Project Structure</h3>
							<div class="bg-gray-900 rounded-lg p-4 font-mono text-sm overflow-x-auto">
								{#each project.projectTree.structure as line}
									<div class="text-green-400 whitespace-nowrap py-1">
										{line}
									</div>
								{/each}
							</div>
						</div>
						
						<div>
							<h3 class="text-lg font-semibold text-gray-900 mb-3">Build Process</h3>
							<div class="space-y-3">
								<div class="flex items-start space-x-3">
									<div class="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">1</div>
									<div>
										<h4 class="font-medium text-gray-900">Planning & Architecture</h4>
										<p class="text-gray-600 text-sm">Defined project requirements and system architecture</p>
									</div>
								</div>
								<div class="flex items-start space-x-3">
									<div class="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">2</div>
									<div>
										<h4 class="font-medium text-gray-900">Development</h4>
										<p class="text-gray-600 text-sm">Built using modern development practices and frameworks</p>
									</div>
								</div>
								<div class="flex items-start space-x-3">
									<div class="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">3</div>
									<div>
										<h4 class="font-medium text-gray-900">Testing & Deployment</h4>
										<p class="text-gray-600 text-sm">Comprehensive testing and deployment pipeline</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				{/if}
			</div>
		</div>
		
		<!-- Footer -->
		<div class="border-t border-gray-100 p-6">
			<div class="flex items-center justify-between">
				<div class="text-sm text-gray-500">
					Project completed in {project.year}
				</div>
				<div class="flex space-x-3">
					<button class="btn-secondary text-sm">
						View Live Demo
					</button>
					<button class="btn-primary text-sm">
						View Source Code
					</button>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.tab-content {
		animation: fadeIn 0.4s ease-out;
	}
	
	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
