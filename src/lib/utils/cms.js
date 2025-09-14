import { browser } from '$app/environment';

// Mock CMS data loader (in production, this would connect to Netlify CMS)
export async function loadProjects() {
  // In a real implementation, this would fetch from your CMS API
  // For now, we'll return the sample data
  return [
    {
      id: 1,
      title: 'Flop App',
      subtitle: 'Social media for poker players',
      description: 'A comprehensive social platform designed specifically for poker enthusiasts, featuring game tracking, community features, and tournament management.',
      image: '/images/flop-app.jpg',
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
      },
      demoUrl: 'https://flop-app-demo.netlify.app',
      sourceUrl: 'https://github.com/abo/flop-app',
      featured: true,
      order: 1
    },
    {
      id: 2,
      title: 'Landscape',
      subtitle: 'Lend and Borrow Dashboard',
      description: 'A sophisticated financial dashboard for peer-to-peer lending and borrowing, featuring real-time analytics and risk assessment tools.',
      image: '/images/landscape.jpg',
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
      },
      demoUrl: 'https://landscape-demo.netlify.app',
      sourceUrl: 'https://github.com/abo/landscape',
      featured: true,
      order: 2
    },
    {
      id: 3,
      title: 'Tribe.so Admin',
      subtitle: 'Community Management Platform',
      description: 'An advanced admin interface for community management, providing tools for moderation, analytics, and user engagement.',
      image: '/images/tribe-admin.jpg',
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
      },
      demoUrl: 'https://tribe-admin-demo.netlify.app',
      sourceUrl: 'https://github.com/abo/tribe-admin',
      featured: true,
      order: 3
    },
    {
      id: 4,
      title: 'Promot3 Dashboard',
      subtitle: 'Marketing Analytics Platform',
      description: 'A comprehensive marketing dashboard providing insights into campaign performance, audience analytics, and ROI tracking.',
      image: '/images/promot3.jpg',
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
      },
      demoUrl: 'https://promot3-demo.netlify.app',
      sourceUrl: 'https://github.com/abo/promot3',
      featured: true,
      order: 4
    }
  ];
}

export async function loadPersonalInfo() {
  // In a real implementation, this would fetch from your CMS API
  return {
    name: 'Abo',
    title: 'Product Designer with 7 years of experience',
    bio: 'I care a lot about using design for positive impact, and enjoy creating user-centric, delightful, and human experiences.',
    profileImage: '/images/profile.jpg',
    email: 'hello@abo.design',
    social: {
      twitter: 'https://twitter.com/abo',
      linkedin: 'https://linkedin.com/in/abo',
      github: 'https://github.com/abo',
      dribbble: 'https://dribbble.com/abo'
    }
  };
}
