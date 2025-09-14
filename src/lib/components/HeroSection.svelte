<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	let heroRef;
	let imageRef;
	let scrambleRef;
	
	// Phrases to cycle through
	const phrases = [
		"automating daily tasks.",
		"drinking coke zeros.",
		"playing golf.",
		"building cool apps.",
		"solving problems.",
		"learning new tech.",
		"late night coding.",
		"morning coffee runs.",
		"weekend hackathons.",
		"clean code practices."
	];
	
	let currentPhraseIndex = 0;
	let scrambleInterval;
	
	// Scramble text animation function
	function scrambleText(element, newText, duration = 800) {
		const originalText = element.textContent;
		const chars = '!<>-_\\/[]{}—=+*^?#________';
		let iteration = 0;
		
		const interval = setInterval(() => {
			element.textContent = newText
				.split('')
				.map((char, index) => {
					if (index < iteration) {
						return newText[index];
					}
					return chars[Math.floor(Math.random() * chars.length)];
				})
				.join('');
			
			if (iteration >= newText.length) {
				clearInterval(interval);
			}
			
			iteration += 1 / 3;
		}, 30);
	}
	
	// Start the phrase cycling
	function startScrambling() {
		scrambleInterval = setInterval(() => {
			currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
			scrambleText(scrambleRef, phrases[currentPhraseIndex]);
		}, 3000); // Change phrase every 3 seconds
	}

	onMount(() => {
		// Split text into words for staggered animation
		const titleWords = document.querySelectorAll('.hero-title .word');
		
		// Hero text animation with clip-path reveal
		const tl = gsap.timeline();
		
		// Animate title words with staggered clip-path reveal
		tl.fromTo('.hero-title', 
			{ 
				clipPath: 'inset(100% 0% 0% 0%)',
				y: 30
			}, 
			{ 
				clipPath: 'inset(0% 0% 0% 0%)',
				y: 0,
				duration: 1.2, 
				ease: 'power3.out', 
				delay: 0.3
			}
		)
		.fromTo('.hero-description', 
			{ 
				clipPath: 'inset(100% 0% 0% 0%)',
				y: 20
			}, 
			{ 
				clipPath: 'inset(0% 0% 0% 0%)',
				y: 0,
				duration: 0.8, 
				ease: 'power2.out'
			}, 
			'-=0.6'
		)
		.fromTo('.hero-cta', 
			{ 
				clipPath: 'inset(100% 0% 0% 0%)',
				y: 20
			}, 
			{ 
				clipPath: 'inset(0% 0% 0% 0%)',
				y: 0,
				duration: 0.6, 
				ease: 'power2.out'
			}, 
			'-=0.4'
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
		
		// Start scrambling text after initial animations
		setTimeout(() => {
			startScrambling();
		}, 2500); // Start after hero animations complete
	});
	
	// Cleanup on component destroy
	import { onDestroy } from 'svelte';
	onDestroy(() => {
		if (scrambleInterval) {
			clearInterval(scrambleInterval);
		}
	});
</script>

<div bind:this={heroRef} class="max-w-6xl mx-auto px-6 py-24">
	<div class="grid lg:grid-cols-2 gap-12 items-center">
		<!-- Left Content -->
		<div class="space-y-8">
			<div class="space-y-6">
				<div class="hero-title-container overflow-hidden">
					<h1 class="hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
						Hey! I'm Justin, a Software Developer based in Toronto!
					</h1>
				</div>
				
				<div class="hero-description-container overflow-hidden">
					<p class="hero-description text-lg text-gray-600 leading-relaxed max-w-lg">
						I'm also a 1A Geological Engineering Student @Waterloo and i'm interested in using tech to physically build a better world.
					</p>
				</div>
			</div>


			<!-- Social Links -->
			<div class="social-links flex items-center space-x-4">
				<!-- LinkedIn -->
				<a href="https://linkedin.com/in/justinlam747" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
						<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
					</svg>
				</a>
				<!-- GitHub -->
				<a href="https://github.com/justinlam747" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
						<path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
					</svg>
				</a>
				<!-- Email -->
				<a href="mailto:jhylam@uwaterloo.ca" class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
					</svg>
				</a>
			</div>
		</div>

		<!-- Right Content - Profile Image -->
		<div class="flex justify-center lg:justify-end">
			<div bind:this={imageRef} class="relative">
				<div class="w-80 h-96 gradient-bg rounded-3xl overflow-hidden shadow-2xl">
					<!-- Profile image -->
					<img 
						src="/images/idcard.png" 
						alt="Justin - Software Developer"
						class="w-full h-full object-cover"
						on:error={(e) => {
							// Fallback to placeholder if image doesn't load
							e.target.style.display = 'none';
							e.target.nextElementSibling.style.display = 'flex';
						}}
					/>
					<!-- Fallback placeholder -->
					<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow-200 to-orange-300" style="display: none;">
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

<style>
	.hero-title-container,
	.hero-description-container,
	.hero-cta-container {
		overflow: hidden;
	}
	
	.hero-title,
	.hero-description,
	.hero-cta {
		will-change: clip-path, transform;
	}
	
	/* Add a subtle text shadow for better visual impact */
	.hero-title {
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
	}
	
	/* Ensure smooth animations */
	* {
		backface-visibility: hidden;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
</style>
