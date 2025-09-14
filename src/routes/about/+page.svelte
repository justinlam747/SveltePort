<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	// Static personal info
	const personalInfo = {
		name: "Justin",
		title: "Software Developer",
		bio: "I'm passionate about leveraging data, technology, and design to create impactful solutions. I enjoy analyzing spatial and numerical data through GIS and data analytics, while also building software and SaaS products that turn complex problems into intuitive experiences.",
		email: "jhylam@uwaterloo.ca",
		social: {
			linkedin: "https://linkedin.com/in/justinlam747",
			github: "https://github.com/justinlam747"
		}
	};

	onMount(() => {
		// Set initial state for animation, then animate in
		gsap.set(['.about-header', '.skills-section', '.tools-section'], { opacity: 0, y: 30 });
		
		// Page entrance animation - staggered reveal
		gsap.timeline()
			.to('.about-header', 
				{ opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
			)
			.to('.skills-section', 
				{ opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, 
				'-=0.4'
			)
			.to('.tools-section', 
				{ opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, 
				'-=0.4'
			);
	});
</script>

<svelte:head>
	<title>About - Justin</title>
</svelte:head>

<div class="pt-32 pb-20">
	<div class="max-w-6xl mx-auto px-6">
		<div class="about-content">
			<!-- About Me Section -->
			<div class="about-header mb-16">
				<h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-left">About Me</h1>
				<div class="space-y-4 text-gray-600 text-lg leading-relaxed">
					<p>
						I'm passionate about leveraging data, technology, and design to create impactful solutions. I am currently learning spatial and numerical data analysis with GIS, while also building software and SaaS products that turn tedious problems into simple experiences.
					</p>
					
					<p>
					Outside of work, I love exploring new experiences, whether it’s trying a new cuisine, working on my golf swing, or planning my next travel adventure. I got into cafés while traveling in Korea and now I'm looking for new spots around Toronto. If you’re ever in town, feel free to reach out - lets grab a cup of coffee!
					</p>
				</div>
			</div>

			<!-- Skills & Expertise Section -->
			<div class="skills-section mb-16">
				<h2 class="text-3xl font-bold text-gray-900 mb-8 text-left">Skills & Expertise</h2>
				
				<div class="grid md:grid-cols-3 gap-8">
					<!-- Frontend Development & SaaS -->
					<div class="card p-6">
						<h3 class="text-lg font-semibold text-gray-900 mb-4 text-left">Frontend Development & SaaS</h3>
						<div class="space-y-3">
							{#each ['React/JavaScript', 'UI/UX Design', 'SaaS Product Design', 'REST API Integration'] as skill}
								<div class="bg-gray-50 rounded-lg p-3 text-center">
									<span class="text-sm font-medium text-gray-700">{skill}</span>
								</div>
							{/each}
						</div>
					</div>

					<!-- Data  -->
					<div class="card p-6">
						<h3 class="text-lg font-semibold text-gray-900 mb-4 text-left">Data Analytics</h3>
						<div class="space-y-3">
							{#each ['Spatial Data Analysis', 'Python Analytics', 'Power BI Dashboards', 'Data Visualization'] as skill}
								<div class="bg-gray-50 rounded-lg p-3 text-center">
									<span class="text-sm font-medium text-gray-700">{skill}</span>
								</div>
							{/each}
						</div>
					</div>

					<!-- Marketing with Organic Growth -->
					<div class="card p-6">
						<h3 class="text-lg font-semibold text-gray-900 mb-4 text-left">Marketing with Organic Growth</h3>
						<div class="space-y-3">
							{#each ['Content Strategy', 'SEO Optimization', 'Brand Development', 'User Acquisition'] as skill}
								<div class="bg-gray-50 rounded-lg p-3 text-center">
									<span class="text-sm font-medium text-gray-700">{skill}</span>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>

			<!-- Tools & Technologies Section -->
			<div class="tools-section mb-16">
				<h2 class="text-3xl font-bold text-gray-900 mb-8 text-left">Tools & Technologies</h2>
				
				<div class="card p-6">
					<div class="grid md:grid-cols-3 gap-8">
						<!-- Programming Languages -->
						<div>
							<h3 class="text-lg font-semibold text-gray-900 mb-4 text-left">Programming</h3>
							<div class="flex flex-wrap gap-2">
								{#each ['Python', 'JavaScript', 'Java', 'SQL', 'C', 'C++', 'HTML', ] as lang}
									<span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
										{lang}
									</span>
								{/each}
							</div>
						</div>

						<!-- Frameworks & Tools -->
						<div>
							<h3 class="text-lg font-semibold text-gray-900 mb-4 text-left">Frameworks & Tools</h3>
							<div class="flex flex-wrap gap-2">
								{#each ['React', 'Node.js', 'Flask', 'Tailwind', 'Git/GitHub', 'Docker'] as tool}
									<span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
										{tool}
									</span>
								{/each}
							</div>
						</div>

						<!-- Data & Analytics -->
						<div>
							<h3 class="text-lg font-semibold text-gray-900 mb-4 text-left">Data & Analytics</h3>
							<div class="flex flex-wrap gap-2">
								{#each ['MongoDB', 'Power BI', 'Pandas', 'NumPy', 'Excel', 'REST APIs'] as tech}
									<span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
										{tech}
									</span>
								{/each}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
