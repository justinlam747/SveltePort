import { browser } from '$app/environment';

// Mock CMS data loader (in production, this would connect to Netlify CMS)
export async function loadProjects() {
  return [
    {
      id: 1,
      title: 'GlazingGorillaGames',
      subtitle: 'Client Project – 2025',
      description: 'Scaled Roblox games like Consume to 30M+ plays and $75K+ revenue by analyzing player retention and engagement metrics.',
      image: '/images/glazing-gorilla-games.jpg',
      color: 'bg-gradient-to-br from-blue-400 to-blue-600',
      technologies: ['React', 'Tailwind', 'Render', 'Axios', 'ExpressJS', 'SQL'],
      category: 'Full Stack Development',
      year: '2025',
      projectTree: {
        structure: [
          'GlazingGorillaGames',
          '├── Data Layer',
          '│   ├── SQL Schemas → Store player, revenue, and engagement metrics',
          '│   └── Express API → Query and filter game data for dashboards',
          '│',
          '├── Backend',
          '│   ├── Axios + Express → Automated data fetching and health checks',
          '│   └── Monitoring → Tracked uptime and performance',
          '│',
          '└── Frontend',
          '    └── React + Tailwind → Built dashboards for retention and revenue insights'
        ],
        buildProcess: 'Designed SQL schemas to store player analytics, built APIs for querying data, and automated reporting dashboards. Implemented backend monitoring with Express and Axios for real-time game stat tracking. Optimized deployment on Render for maximum uptime and scalability.'
      },
      demoUrl: '',
      sourceUrl: '',
      featured: true,
      order: 1
    },
    {
      id: 2,
      title: 'GPAConnect',
      subtitle: 'Personal Project – 2024',
      description: 'Built a GPA tracking platform with secure authentication, course management, and automatic GPA calculation.',
      image: '/images/gpa-connect.jpg',
      color: 'bg-gradient-to-br from-green-400 to-green-600',
      technologies: ['React', 'MongoDB', 'Express', 'Node.js', 'JWT', 'bcrypt.js', 'Recharts'],
      category: 'Full Stack Web App',
      year: '2024',
      projectTree: {
        structure: [
          'GPAConnect',
          '├── Backend',
          '│   ├── Express API → Handles CRUD for courses, assignments, grades',
          '│   └── MongoDB → Stores user data and GPA calculations',
          '│',
          '├── Frontend',
          '│   └── React + Recharts → Displays GPA trends and per-course analytics',
          '│',
          '└── Security',
          '    └── JWT + bcrypt → Implements secure authentication & password hashing'
        ],
        buildProcess: 'Developed data pipelines using MongoDB schemas and input validation with Express Validator. Automated trend visualization using Recharts for grade analytics dashboards. Implemented secure login flows using JWT + bcrypt.js.'
      },
      demoUrl: '',
      sourceUrl: '',
      featured: true,
      order: 2
    },
    {
      id: 3,
      title: 'Pacman Clone',
      subtitle: 'Course Project – 2025',
      description: 'Developed a console-based Pacman clone in C with dynamic map loading, memory allocation, and error handling.',
      image: '/images/pacman-clone.jpg',
      color: 'bg-gradient-to-br from-yellow-400 to-yellow-600',
      technologies: ['C', 'Memory Management', 'Unit Testing'],
      category: 'Systems Programming',
      year: '2025',
      projectTree: {
        structure: [
          'Pacman Clone',
          '├── Core Logic',
          '│   ├── Dynamic Map Loading → Reads maps from files, allocates memory',
          '│   ├── Player + Ghost Movement → Handles collisions and direction changes',
          '│   └── Game State → Checks for win/loss conditions',
          '│',
          '└── Testing',
          '    └── Unit Tests → Covers movement, map parsing, and edge cases'
        ],
        buildProcess: 'Programmed AI-driven ghost logic with collision detection and win/loss validation. Designed automated unit tests achieving 94% coverage.'
      },
      demoUrl: '',
      sourceUrl: '',
      featured: true,
      order: 3
    },
    {
      id: 4,
      title: 'Plant Incubator',
      subtitle: 'MakeUofT Hackathon – 2025',
      description: 'Created an automated plant-care system with Flask APIs for data collection and retrieval.',
      image: '/images/plant-incubator.jpg',
      color: 'bg-gradient-to-br from-emerald-400 to-emerald-600',
      technologies: ['Python', 'OpenCV', 'Arduino', 'Flask', 'MongoDB'],
      category: 'IoT & Computer Vision',
      year: '2025',
      projectTree: {
        structure: [
          'Plant Incubator',
          '├── Hardware',
          '│   └── Arduino Sensors → Collect soil moisture, temperature, humidity data',
          '│',
          '├── Software',
          '│   ├── Flask API → Data collection and retrieval endpoints',
          '│   └── OpenCV → Image processing for growth measurement',
          '│',
          '└── Data Layer',
          '    └── MongoDB → Stores time-series sensor data and growth metrics'
        ],
        buildProcess: 'Implemented real-time computer vision using OpenCV to track growth over time. Built pipelines to log soil moisture, temperature, and humidity data into MongoDB. Designed a live analytics dashboard for monitoring plant health and recommending actions.'
      },
      demoUrl: '',
      sourceUrl: '',
      featured: false,
      order: 4
    },
  
    {
      id: 5,
      title: 'Water Treatment Plant',
      subtitle: 'Course Project – 2024',
      description: 'Designed a servo-driven aluminum sulfate dispensing assembly to improve water purification.',
      image: '/images/water-treatment-plant.jpg',
      color: 'bg-gradient-to-br from-blue-400 to-cyan-500',
      technologies: ['Arduino IDE', 'Servo Motors', 'Control Systems'],
      category: 'Automation & Control',
      year: '2024',
      projectTree: {
        structure: [
          'Water Treatment Plant',
          '├── Hardware',
          '│   ├── Servo Motors → Dispensed aluminum sulfate at timed intervals',
          '│   └── Mixing Assembly → Ensured uniform treatment tank mixing',
          '│',
          '├── Software',
          '│   └── Arduino IDE → Control algorithm for motor timing and actuation',
          '│',
          '└── Collaboration',
          '    └── Weekly design iteration and final integration'
        ],
        buildProcess: 'Automated mixing system controlled via Arduino, improving consistency by 30%. Led a team of 5, finishing two weeks ahead of schedule.'
      },
      demoUrl: '',
      sourceUrl: '',
      featured: false,
      order: 5
    },
    {
      id: 6,
      title: 'EdgeHacks Hackathon',
      subtitle: 'Hackathon Director – 2023',
      description: 'Built a responsive event website, boosting participant engagement by 40%.',
      image: '/images/edge-hacks.jpg',
      color: 'bg-gradient-to-br from-indigo-400 to-indigo-600',
      technologies: ['HTML', 'CSS', 'Event Leadership', 'Project Management'],
      category: 'Event Leadership & Development',
      year: '2023',
      projectTree: {
        structure: [
          'EdgeHacks',
          '├── Website',
          '│   ├── HTML/CSS → Designed responsive event site',
          '│   └── Hosting → Deployed registration + schedule updates',
          '│',
          '├── Operations',
          '│   └── Sponsorship & Logistics → Managed funds, prizes, and venue setup',
          '│',
          '└── Leadership',
          '    └── Coordinated team, marketing, workshops, and event execution'
        ],
        buildProcess: 'Secured $5,000+ in sponsorship funding and coordinated prizes and resources. Led a 10-person organizing team to run a 48-hour hackathon for 100+ participants.'
      },
      demoUrl: '',
      sourceUrl: '',
      featured: false,
      order: 6
    }
  ];
}

export async function loadPersonalInfo() {
  // In a real implementation, this would fetch from your CMS API
  return {
    name: 'Justin',
    title: 'Software Developer & Data Analyst',
    bio: 'I\'m passionate about leveraging data, technology, and design to create impactful solutions. I enjoy analyzing spatial and numerical data through GIS and data analytics, while also building software and SaaS products that turn complex problems into intuitive experiences.',
    profileImage: '/images/profile.jpg',
    email: 'hello@justin.dev',
    social: {
      twitter: 'https://twitter.com/justin',
      linkedin: 'https://linkedin.com/in/justin',
      github: 'https://github.com/justin',
      dribbble: 'https://dribbble.com/justin'
    }
  };
}
