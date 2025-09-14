<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	// Static personal info
	const personalInfo = {
		name: "Justin",
		email: "jhylam@uwaterloo.ca",
		phone: "",
		location: "Waterloo, ON",
		social: {
			linkedin: "https://linkedin.com/in/justinlam747",
			github: "https://github.com/justinlam747"
		}
	};
	let formData = {
		name: '',
		email: '',
		message: ''
	};

	function handleSubmit(event) {
		event.preventDefault();
		// Handle form submission here
		console.log('Form submitted:', formData);
		
		// Show success animation
		gsap.to('.form-container', {
			scale: 0.95,
			duration: 0.1,
			yoyo: true,
			repeat: 1,
			ease: 'power2.inOut'
		});
	}

	onMount(async () => {
		// Temporarily disabled animations to fix hydration
		// gsap.set('.contact-content', { opacity: 0, y: 30 });
		// gsap.timeline().to('.contact-content', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' });
	});
</script>

<svelte:head>
	<title>Contact - Justin</title>
</svelte:head>

<div class="pt-32 pb-20">
	<div class="max-w-4xl mx-auto px-6">
		<div class="contact-content">
			<div class="text-center mb-16">
				<h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Let's Work Together</h1>
				<p class="text-xl text-gray-600 max-w-2xl mx-auto">
					Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
				</p>
			</div>

			<div class="grid lg:grid-cols-2 gap-16">
				<!-- Contact Info -->
				<div class="space-y-8">
					<div>
						<h2 class="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
						<div class="space-y-4">
							<div class="flex items-center space-x-4">
								<div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
									<svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
									</svg>
								</div>
								<div>
									<p class="font-medium text-gray-900">Email</p>
									<p class="text-gray-600">{personalInfo.email || 'jhylam@uwaterloo.ca'}</p>
								</div>
							</div>

							<div class="flex items-center space-x-4">
								<div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
									<svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
									</svg>
								</div>
							<div>
								<p class="font-medium text-gray-900">Location</p>
								<p class="text-gray-600">Toronto, Canada</p>
							</div>
							</div>
						</div>
					</div>

					<!-- Social Links -->
					<div>
						<h3 class="text-lg font-semibold text-gray-900 mb-4">Connect With Me</h3>
						<div class="flex space-x-4">
							<!-- LinkedIn -->
							<a href="https://linkedin.com/in/justinlam747" target="_blank" rel="noopener noreferrer" 
								class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
								<span class="sr-only">LinkedIn</span>
								<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
								</svg>
							</a>
							<!-- GitHub -->
							<a href="https://github.com/justinlam747" target="_blank" rel="noopener noreferrer" 
								class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
								<span class="sr-only">GitHub</span>
								<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
								</svg>
							</a>
							<!-- Email -->
							<a href="mailto:jhylam@uwaterloo.ca" 
								class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
								<span class="sr-only">Email</span>
								<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
								</svg>
							</a>
						</div>
					</div>
				</div>

				<!-- Contact Form -->
				<div class="form-container">
					<form on:submit={handleSubmit} class="space-y-6">
						<div>
							<label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name</label>
							<input 
								type="text" 
								id="name" 
								bind:value={formData.name}
								required
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
								placeholder="Your name"
							>
						</div>

						<div>
							<label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
							<input 
								type="email" 
								id="email" 
								bind:value={formData.email}
								required
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
								placeholder="your@email.com"
							>
						</div>

						<div>
							<label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
							<textarea 
								id="message" 
								bind:value={formData.message}
								required
								rows="5"
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
								placeholder="Tell me about your project..."
							></textarea>
						</div>

						<button type="submit" class="w-full btn-primary">
							Send Message
						</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
