import {
  BookOpenIcon,
  HeartIcon,
  BrainIcon,
  ZapIcon,
  UsersIcon,
  ClockIcon,
} from 'lucide-react'

export const resources = [
    {
      category: 'Burnout Prevention',
      icon: ZapIcon,
      image:
        'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80',
      items: [
        {
          title: 'Recognizing Developer Burnout',
          description:
            'Learn the early warning signs of burnout specific to software development.',
          type: 'Article',
          readTime: '8 min',
          image:
            'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=400&q=80',
        },
        {
          title: 'Setting Healthy Boundaries',
          description:
            'Practical strategies for managing on-call rotations and work-life balance.',
          type: 'Guide',
          readTime: '12 min',
          image:
            'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&q=80',
        },
        {
          title: 'Sustainable Productivity',
          description:
            'How to maintain high performance without sacrificing your mental health.',
          type: 'Article',
          readTime: '10 min',
          image:
            'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&q=80',
        },
      ],
    },
    {
      category: 'Imposter Syndrome',
      icon: BrainIcon,
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
      items: [
        {
          title: 'Understanding Imposter Syndrome in Tech',
          description:
            'Why imposter syndrome is so common among developers and how to address it.',
          type: 'Article',
          readTime: '7 min',
          image:
            'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
        },
        {
          title: 'Building Confidence as a Developer',
          description:
            'Practical exercises to recognize your skills and accomplishments.',
          type: 'Workbook',
          readTime: '15 min',
          image:
            'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80',
        },
        {
          title: 'Overcoming Comparison Culture',
          description:
            'Navigate social media and tech culture without losing confidence.',
          type: 'Guide',
          readTime: '9 min',
          image:
            'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80',
        },
      ],
    },
    {
      category: 'Work-Life Balance',
      icon: ClockIcon,
      image:
        'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80',
      items: [
        {
          title: 'Remote Work Mental Health',
          description:
            'Strategies for maintaining wellness while working from home.',
          type: 'Guide',
          readTime: '11 min',
          image:
            'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&q=80',
        },
        {
          title: 'Digital Detox for Developers',
          description: 'How to disconnect from work and screens without guilt.',
          type: 'Article',
          readTime: '6 min',
          image:
            'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80',
        },
        {
          title: 'Creating Work Rituals',
          description:
            'Establish healthy routines that separate work from personal time.',
          type: 'Workbook',
          readTime: '8 min',
          image:
            'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&q=80',
        },
      ],
    },
    {
      category: 'Stress Management',
      icon: HeartIcon,
      image:
        'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80',
      items: [
        {
          title: 'Managing Deploy Anxiety',
          description:
            'Techniques to stay calm during high-pressure deployments and incidents.',
          type: 'Guide',
          readTime: '10 min',
          image:
            'https://images.unsplash.com/photo-1499728603263-13726abce5fd?w=400&q=80',
        },
        {
          title: 'Mindfulness for Developers',
          description:
            'Quick meditation and breathing exercises you can do at your desk.',
          type: 'Practice',
          readTime: '5 min',
          image:
            'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80',
        },
        {
          title: 'Dealing with Code Review Stress',
          description:
            'How to give and receive feedback without emotional impact.',
          type: 'Article',
          readTime: '7 min',
          image:
            'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80',
        },
      ],
    },
    {
      category: 'Team Dynamics',
      icon: UsersIcon,
      image:
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
      items: [
        {
          title: 'Healthy Communication in Tech Teams',
          description:
            'Navigate async communication and reduce misunderstandings.',
          type: 'Guide',
          readTime: '9 min',
          image:
            'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80',
        },
        {
          title: 'Setting Expectations with Managers',
          description:
            'How to have productive conversations about workload and mental health.',
          type: 'Article',
          readTime: '8 min',
          image:
            'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&q=80',
        },
        {
          title: 'Building Supportive Team Culture',
          description:
            'Create an environment where mental health is prioritized.',
          type: 'Guide',
          readTime: '12 min',
          image:
            'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80',
        },
      ],
    },
    {
      category: 'Learning & Growth',
      icon: BookOpenIcon,
      image:
        'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80',
      items: [
        {
          title: 'Learning Without Overwhelm',
          description: 'Stay current with technology without burning out.',
          type: 'Article',
          readTime: '8 min',
          image:
            'https://images.unsplash.com/photo-1513258496099-48168024aec0?w=400&q=80',
        },
        {
          title: 'Dealing with Tech FOMO',
          description:
            'How to handle the fear of missing out on new technologies.',
          type: 'Guide',
          readTime: '7 min',
          image:
            'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80',
        },
        {
          title: 'Sustainable Career Growth',
          description:
            'Build your career at a pace that supports your mental health.',
          type: 'Article',
          readTime: '10 min',
          image:
            'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=80',
        },
      ],
    },
  ]