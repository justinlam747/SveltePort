<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { mounted } from '$lib/stores/mounted.js';

	let navItems = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/about' },
		{ name: 'Projects', href: '/works' },
		
	];

	// Hydration-safe animations
	onMount(() => {
		const unsubscribe = mounted.subscribe((isMounted) => {
			if (isMounted) {
				gsap.fromTo('.nav-item', 
					{ opacity: 0, y: -10 }, 
					{ opacity: 1, y: 0, duration: 0.5, stagger: 0.1, delay: 0.2 }
				);
			}
		});

		return unsubscribe;
	});
</script>

<nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
	<div class="max-w-6xl mx-auto px-6 py-4">
		<div class="flex items-center justify-between">
			<!-- Logo -->
			<div class="nav-item">
				<a href="/" class="flex items-center space-x-3 group">
					<div class="relative">
						<div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-110"></div>
						<div class="absolute inset-0 bg-gradient-to-br from-blue-400 to-transparent rounded-full opacity-50"></div>
						<div class="absolute top-2 left-2 w-2 h-2 bg-white/30 rounded-full"></div>
					</div>
					
				</a>
			</div>

			<!-- Navigation Links -->
			<div class="hidden md:flex items-center space-x-8">
				{#each navItems as item}
					<a 
						href={item.href} 
						class="nav-item text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
					>
						{item.name}
					</a>
				{/each}
			</div>

			<!-- Mobile Menu Button -->
			<button class="md:hidden nav-item p-2">
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
				</svg>
			</button>
		</div>
	</div>
</nav>
