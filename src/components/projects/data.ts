import { StaticImageData } from 'next/image'

import blockblast from './images/block-blast.png'
import peopletap from './images/people-tap-game.png'
import xpqueue from './images/xp-queue-system.png'

type ProjectType = {
    link: string
    title: string
    image: StaticImageData
    description?: string
    tech: string[]
}

export const data: ProjectType[] = [
    {
        image: peopletap,
        title: 'People Tap Game',
        link: '',
        description:
            'A RabbitMQ-powered idle tapping game with real-time XP gain, active/idle income mechanics, player skills, quests, and leaderboard rankings.',
        tech: ['NestJS', 'RabbitMQ', 'MySQL', 'TypeORM', 'AWS EC2']
    },
    {
        image: xpqueue,
        title: 'XP Queue System',
        link: '',
        description:
            'Scalable XP distribution service handling millions of tap events per day. Features auto-scaling, retry logic, delay queues, sharded consumers, and dead-letter handling.',
        tech: ['RabbitMQ', 'NestJS', 'Docker', 'MySQL', 'EC2']
    },
    {
        image: blockblast,
        title: 'Block Blast-Inspired Mobile Game',
        link: '',
        description:
            'A block puzzle game in development — will feature regional/world rankings, diamond economy, power-ups, and video-reward monetization. Built with React Native and Unity (experimental).',
        tech: ['React Native', 'Unity', 'TypeScript', 'Firebase']
    }
]
