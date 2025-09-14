<script>
	import { onMount, onDestroy } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	export let projects = []; // Accept projects as prop from server-side loading
	let projectRefs = [];
	let scrollTriggerInstance;
	let hoverAnimations = [];

	onMount(async () => {
		
		// Register ScrollTrigger plugin
		gsap.registerPlugin(ScrollTrigger);
		
		// Animate project cards on scroll with blur and slide up
		scrollTriggerInstance = gsap.fromTo('.project-card', 
			{ 
				y: 60,
				filter: 'blur(5px)',
				opacity: 0
			}, 
			{ 
				y: 0,
				filter: 'blur(0px)',
				opacity: 1,
				duration: 0.2, 
				ease: 'power2.out',
				scrollTrigger: {
					trigger: '.projects-grid',
					start: 'top 80%',
					end: 'bottom 20%',
					toggleActions: 'play none none reverse'
				}
			}
		);

		// Hover animations for project cards
		projectRefs.forEach((ref, index) => {
			if (ref) {
				const handleMouseEnter = () => {
					const tween = gsap.to(ref, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
					hoverAnimations.push(tween);
				};
				
				const handleMouseLeave = () => {
					const tween = gsap.to(ref, { scale: 1, duration: 0.3, ease: 'power2.out' });
					hoverAnimations.push(tween);
				};

				ref.addEventListener('mouseenter', handleMouseEnter);
				ref.addEventListener('mouseleave', handleMouseLeave);
				
				// Store references for cleanup
				ref._hoverListeners = { handleMouseEnter, handleMouseLeave };
			}
		});
	});

	onDestroy(() => {
		// Clean up ScrollTrigger instances
		if (scrollTriggerInstance && scrollTriggerInstance.scrollTrigger) {
			scrollTriggerInstance.scrollTrigger.kill();
		}
		ScrollTrigger.getAll().forEach(trigger => trigger.kill());
		
		// Clean up hover animations
		hoverAnimations.forEach(tween => {
			if (tween) tween.kill();
		});
		
		// Remove event listeners
		projectRefs.forEach(ref => {
			if (ref && ref._hoverListeners) {
				ref.removeEventListener('mouseenter', ref._hoverListeners.handleMouseEnter);
				ref.removeEventListener('mouseleave', ref._hoverListeners.handleMouseLeave);
			}
		});
		
		// Clear arrays
		hoverAnimations = [];
		projectRefs = [];
	});

</script>

<div class="projects-grid grid md:grid-cols-2 gap-8 max-w-6xl mx-auto ">
	{#each projects as project, index}
		<a 
			bind:this={projectRefs[index]}
			href="{project.link || project.demo || project.github || '#'}"
			target="{project.link && project.link.startsWith('/') ? '_self' : '_blank'}"
			rel="{project.link && project.link.startsWith('/') ? '' : 'noopener noreferrer'}"
			class="project-card card cursor-pointer group block"
		>
			<div class="relative h-96  overflow-hidden">
				<!-- Project Image/Placeholder -->
				<div class="w-full h-full flex items-center justify-center p-6">
					{#if project.image && project.image !== 'default-project.png'}
						<!-- Real project image -->
						<img 
							src="/images/{project.image}" 
							alt="{project.title}"
							class="w-full h-full object-cover rounded-2xl shadow-lg p-3 transition-transform duration-300"
							on:error={(e) => {
								// Fallback to placeholder if image doesn't load
								e.target.style.display = 'none';
								e.target.nextElementSibling.style.display = 'flex';
							}}
						/>
					{/if}
					
					<!-- Large placeholder image for all projects -->
					<div class="w-full h-full bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300" style="{project.image && project.image !== 'default-project.png' ? 'display: none;' : ''}">
						<div class="text-center text-white/90">
							<div class="w-24 h-24 mx-auto mb-6 bg-white/20 rounded-2xl flex items-center justify-center">
								{#if project.id === 1}
									<!-- Code/Gaming icon for GlazingGorillaGames -->
									<svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
										<path d="M8 10h8v4H8zM12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1 17.93V17h2v2.93c-3.94-.494-7-3.858-7-7.93s3.06-7.436 7-7.93v2.93H9c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h6c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2h-2V4.07c3.94.494 7 3.858 7 7.93s-3.06 7.436-7 7.93z"/>
									</svg>
								{:else if project.id === 2}
									<!-- Chart/Analytics icon for GPAConnect -->
									<svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
										<path d="M3 3v18h18v-2H5V3H3zm4 12h2v4H7v-4zm4-4h2v8h-2v-8zm4-4h2v12h-2V7z"/>
									</svg>
								{:else if project.id === 3}
									<!-- Game controller for Pacman -->
									<svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
										<path d="M7.97 16.06C6.93 15.42 6.25 14.25 6.25 13c0-1.25.68-2.42 1.72-3.06.37-.23.86-.06 1.09.31.23.37.06.86-.31 1.09-.52.32-.75.84-.75 1.66s.23 1.34.75 1.66c.37.23.54.72.31 1.09-.15.24-.4.37-.66.37-.14 0-.29-.04-.43-.12zM16.03 16.06c-.14.08-.29.12-.43.12-.26 0-.51-.13-.66-.37-.23-.37-.06-.86.31-1.09.52-.32.75-.84.75-1.66s-.23-1.34-.75-1.66c-.37-.23-.54-.72-.31-1.09.23-.37.72-.54 1.09-.31 1.04.64 1.72 1.81 1.72 3.06 0 1.25-.68 2.42-1.72 3.06z"/>
									</svg>
								{:else if project.id === 4}
									<!-- Plant/IoT icon -->
									<svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12 2C9.24 2 7 4.24 7 7c0 1.01.29 1.95.78 2.75L12 22l4.22-12.25c.49-.8.78-1.74.78-2.75 0-2.76-2.24-5-5-5zm0 7.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
									</svg>
								{:else if project.id === 5}
									<!-- Engineering/Water icon -->
									<svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
									</svg>
								{:else}
									<!-- Default code icon -->
									<svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
										<path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
									</svg>
								{/if}
							</div>
							<h3 class="text-xl font-bold mb-2">{project.title}</h3>
							<p class="text-sm opacity-80">{project.category}</p>
						</div>
					</div>
				</div>
				
				<!-- Hover overlay -->
				<div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
					<div class="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
						<svg class="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
						</svg>
					</div>
				</div>
			</div>
			
			<div class="p-6">
				<div class="flex items-center justify-between mb-3">
					<h3 class="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
						{project.title}
					</h3>
					<svg class="w-5 h-5 text-gray-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
					</svg>
				</div>
				
				<p class="text-gray-600 text-sm mb-4">{project.subtitle}</p>
				
				<div class="flex items-center justify-between text-xs text-gray-500">
					<span class="bg-gray-100 px-2 py-1 rounded-full">{project.category}</span>
					<span>{project.year}</span>
				</div>
			</div>
		</a>
	{/each}
</div>

<style>
	.project-card {
		transition: all 0.3s ease;
	}
	
	.project-card:hover {
		box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
	}
</style>
