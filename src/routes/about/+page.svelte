<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { loadPersonalInfo } from '$lib/utils/cms.js';

	let personalInfo = {};

	onMount(async () => {
		personalInfo = await loadPersonalInfo();
		
		// Page entrance animation
		gsap.timeline()
			.fromTo('.about-content', 
				{ opacity: 0, y: 30 }, 
				{ opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
			);
	});
</script>

<svelte:head>
	<title>About - Abo</title>
</svelte:head>

<div class="pt-32 pb-20">
	<div class="max-w-4xl mx-auto px-6">
		<div class="about-content">
			<div class="text-center mb-16">
				<h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h1>
				<p class="text-xl text-gray-600 max-w-2xl mx-auto">
					{personalInfo.bio || 'Loading...'}
				</p>
			</div>

			<div class="grid lg:grid-cols-2 gap-16 items-center">
				<div class="space-y-6">
					<h2 class="text-2xl font-bold text-gray-900">My Journey</h2>
					<div class="space-y-4 text-gray-600">
						<p>
							With over 7 years of experience in product design, I've had the privilege of working 
							with startups and established companies to create meaningful digital experiences.
						</p>
						<p>
							My approach combines user research, design thinking, and technical understanding 
							to deliver solutions that not only look great but also solve real problems.
						</p>
						<p>
							I believe in the power of design to create positive impact and am passionate about 
							building products that make people's lives better.
						</p>
					</div>
				</div>

				<div class="space-y-8">
					<div>
						<h3 class="text-lg font-semibold text-gray-900 mb-4">Skills & Expertise</h3>
						<div class="grid grid-cols-2 gap-4">
							{#each ['UI/UX Design', 'Product Strategy', 'User Research', 'Prototyping', 'Design Systems', 'Frontend Development'] as skill}
								<div class="bg-gray-50 rounded-lg p-3 text-center">
									<span class="text-sm font-medium text-gray-700">{skill}</span>
								</div>
							{/each}
						</div>
					</div>

					<div>
						<h3 class="text-lg font-semibold text-gray-900 mb-4">Tools I Use</h3>
						<div class="flex flex-wrap gap-3">
							{#each ['Figma', 'Sketch', 'Adobe Creative Suite', 'Principle', 'Framer', 'React', 'Vue.js', 'Svelte'] as tool}
								<span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
									{tool}
								</span>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
