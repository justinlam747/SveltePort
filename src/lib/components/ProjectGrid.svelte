<script>
	import { onMount, createEventDispatcher } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { loadProjects } from '$lib/utils/cms.js';

	const dispatch = createEventDispatcher();

	let projects = [];
	let projectRefs = [];

	// Load projects from CMS
	onMount(async () => {
		projects = await loadProjects();
		
		// Register ScrollTrigger plugin
		gsap.registerPlugin(ScrollTrigger);
		
		// Animate project cards on scroll
		gsap.fromTo('.project-card', 
			{ opacity: 0, y: 50, scale: 0.9 }, 
			{ 
				opacity: 1, 
				y: 0, 
				scale: 1,
				duration: 0.6, 
				stagger: 0.2, 
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
				ref.addEventListener('mouseenter', () => {
					gsap.to(ref, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
				});
				
				ref.addEventListener('mouseleave', () => {
					gsap.to(ref, { scale: 1, duration: 0.3, ease: 'power2.out' });
				});
			}
		});
	});

	// Sample projects data (fallback)
	let fallbackProjects = [
		{
			id: 1,
			title: 'Flop App',
			subtitle: 'Social media for poker players',
			description: 'A comprehensive social platform designed specifically for poker enthusiasts, featuring game tracking, community features, and tournament management.',
			image: '/api/placeholder/400/300',
			color: 'gradient-purple',
			technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Socket.io'],
			category: 'Mobile App',
			year: '2023',
			projectTree: {
				structure: [
					'Frontend (React Native)',
					'├── Components',
					'├── Screens',
					'├── Navigation',
					'└── Utils',
					'Backend (Node.js)',
					'├── API Routes',
					'├── Database Models',
					'├── Authentication',
					'└── Real-time Features'
				],
				buildProcess: 'Built using agile methodology with weekly sprints, focusing on user feedback and iterative improvements.'
			}
		},
		{
			id: 2,
			title: 'Landscape',
			subtitle: 'Lend and Borrow Dashboard',
			description: 'A sophisticated financial dashboard for peer-to-peer lending and borrowing, featuring real-time analytics and risk assessment tools.',
			image: '/api/placeholder/400/300',
			color: 'gradient-dark',
			technologies: ['Vue.js', 'Python', 'FastAPI', 'MongoDB'],
			category: 'Web Application',
			year: '2023',
			projectTree: {
				structure: [
					'Frontend (Vue.js)',
					'├── Dashboard Components',
					'├── Chart Libraries',
					'├── Form Validation',
					'└── State Management',
					'Backend (Python/FastAPI)',
					'├── API Endpoints',
					'├── Data Processing',
					'├── Risk Algorithms',
					'└── Security Layer'
				],
				buildProcess: 'Developed with a focus on financial security and regulatory compliance, using test-driven development.'
			}
		},
		{
			id: 3,
			title: 'Tribe.so Admin',
			subtitle: 'Community Management Platform',
			description: 'An advanced admin interface for community management, providing tools for moderation, analytics, and user engagement.',
			image: '/api/placeholder/400/300',
			color: 'bg-gray-100',
			technologies: ['React', 'TypeScript', 'GraphQL', 'PostgreSQL'],
			category: 'Admin Panel',
			year: '2022',
			projectTree: {
				structure: [
					'Frontend (React/TypeScript)',
					'├── Admin Components',
					'├── Data Visualization',
					'├── User Management',
					'└── Moderation Tools',
					'Backend (GraphQL)',
					'├── Schema Definition',
					'├── Resolvers',
					'├── Database Layer',
					'└── Authentication'
				],
				buildProcess: 'Built with scalability in mind, using microservices architecture and comprehensive testing.'
			}
		},
		{
			id: 4,
			title: 'Promot3 Dashboard',
			subtitle: 'Marketing Analytics Platform',
			description: 'A comprehensive marketing dashboard providing insights into campaign performance, audience analytics, and ROI tracking.',
			image: '/api/placeholder/400/300',
			color: 'bg-gradient-to-br from-green-400 to-blue-500',
			technologies: ['Angular', 'D3.js', 'Express.js', 'MySQL'],
			category: 'Analytics Dashboard',
			year: '2022',
			projectTree: {
				structure: [
					'Frontend (Angular)',
					'├── Dashboard Widgets',
					'├── Data Visualization (D3.js)',
					'├── Report Generation',
					'└── User Interface',
					'Backend (Express.js)',
					'├── API Services',
					'├── Data Aggregation',
					'├── Report Engine',
					'└── Database Integration'
				],
				buildProcess: 'Developed using component-driven development with extensive data visualization requirements.'
			}
		}
	];

	function openProject(project) {
		dispatch('openProject', project);
	}
</script>

<div class="projects-grid grid md:grid-cols-2 gap-8">
	{#each projects as project, index}
		<div 
			bind:this={projectRefs[index]}
			class="project-card card cursor-pointer group"
			on:click={() => openProject(project)}
			on:keydown={(e) => e.key === 'Enter' && openProject(project)}
			role="button"
			tabindex="0"
		>
			<div class="relative h-64 {project.color} overflow-hidden">
				<!-- Project Image Placeholder -->
				<div class="w-full h-full flex items-center justify-center">
					{#if project.id === 1}
						<!-- Flop App Mock -->
						<div class="relative">
							<div class="w-32 h-56 bg-gray-900 rounded-2xl shadow-2xl transform rotate-12 group-hover:rotate-6 transition-transform duration-300">
								<div class="p-4 space-y-3">
									<div class="h-3 bg-purple-400 rounded"></div>
									<div class="space-y-2">
										<div class="h-2 bg-gray-600 rounded w-3/4"></div>
										<div class="h-2 bg-gray-600 rounded w-1/2"></div>
									</div>
									<div class="h-16 bg-purple-500/20 rounded"></div>
									<div class="space-y-1">
										<div class="h-2 bg-gray-600 rounded"></div>
										<div class="h-2 bg-gray-600 rounded w-2/3"></div>
									</div>
								</div>
							</div>
						</div>
					{:else if project.id === 2}
						<!-- Landscape Dashboard Mock -->
						<div class="w-48 h-32 bg-gray-800 rounded-lg p-4 group-hover:scale-105 transition-transform duration-300">
							<div class="space-y-2">
								<div class="flex justify-between items-center">
									<div class="h-2 bg-cyan-400 rounded w-16"></div>
									<div class="h-2 bg-gray-600 rounded w-8"></div>
								</div>
								<div class="h-1 bg-gray-600 rounded w-full"></div>
								<div class="h-8 bg-cyan-500/20 rounded"></div>
								<div class="flex space-x-2">
									<div class="h-2 bg-gray-600 rounded flex-1"></div>
									<div class="h-2 bg-gray-600 rounded flex-1"></div>
								</div>
							</div>
						</div>
					{:else}
						<!-- Generic project placeholder -->
						<div class="w-32 h-32 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
							<svg class="w-12 h-12 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
							</svg>
						</div>
					{/if}
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
		</div>
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
