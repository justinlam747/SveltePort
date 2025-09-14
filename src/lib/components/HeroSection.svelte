<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	let heroRef;
	let imageRef;

	onMount(() => {
		// Hero text animation
		gsap.timeline()
			.fromTo('.hero-title', 
				{ opacity: 0, y: 30 }, 
				{ opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.2 }
			)
			.fromTo('.hero-description', 
				{ opacity: 0, y: 20 }, 
				{ opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 
				'-=0.4'
			)
			.fromTo('.hero-cta', 
				{ opacity: 0, y: 20 }, 
				{ opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 
				'-=0.3'
			)
			.fromTo('.social-links', 
				{ opacity: 0, x: -20 }, 
				{ opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' }, 
				'-=0.4'
			);

		// Profile image animation
		gsap.fromTo(imageRef, 
			{ opacity: 0, scale: 0.8, rotation: -5 }, 
			{ opacity: 1, scale: 1, rotation: 0, duration: 1, ease: 'power2.out', delay: 0.4 }
		);

		// Floating animation for profile image
		gsap.to(imageRef, {
			y: -10,
			duration: 2,
			ease: 'power1.inOut',
			yoyo: true,
			repeat: -1
		});
	});
</script>

<div bind:this={heroRef} class="max-w-6xl mx-auto px-6 py-20">
	<div class="grid lg:grid-cols-2 gap-12 items-center">
		<!-- Left Content -->
		<div class="space-y-8">
			<div class="space-y-6">
				<h1 class="hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
					Hey, I'm Abo, a product designer with 7 years of experience
				</h1>
				
				<p class="hero-description text-lg text-gray-600 leading-relaxed max-w-lg">
					I care a lot about using design for positive impact, and enjoy creating 
					user-centric, delightful, and human experiences.
				</p>
			</div>

			<div class="hero-cta">
				<button class="btn-primary group">
					Contact me
					<svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
					</svg>
				</button>
			</div>

			<!-- Social Links -->
			<div class="social-links flex items-center space-x-4">
				<a href="#" class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
						<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
					</svg>
				</a>
				<a href="#" class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
						<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
					</svg>
				</a>
				<a href="#" class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
						<path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
					</svg>
				</a>
				<a href="#" class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
						<path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
					</svg>
				</a>
			</div>
		</div>

		<!-- Right Content - Profile Image -->
		<div class="flex justify-center lg:justify-end">
			<div bind:this={imageRef} class="relative">
				<div class="w-80 h-96 gradient-bg rounded-3xl overflow-hidden shadow-2xl">
					<!-- Placeholder for profile image -->
					<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow-200 to-orange-300">
						<div class="w-48 h-48 bg-white/20 rounded-full flex items-center justify-center">
							<svg class="w-24 h-24 text-white/60" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
							</svg>
						</div>
					</div>
				</div>
				
				<!-- Decorative elements -->
				<div class="absolute -top-4 -right-4 w-8 h-8 bg-primary-400 rounded-full opacity-80"></div>
				<div class="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-400 rounded-full opacity-60"></div>
			</div>
		</div>
	</div>
</div>
