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
        image: xpqueue,
        title: 'XP Queue System',
        link: '',
        description:
            'An event-driven backend service that processes high-volume activity streams and distributes XP at scale. Designed with idempotent consumers, retry & delay strategies, sharding, and DLQ handling to keep throughput stable under load.',
        tech: ['RabbitMQ', 'NestJS', 'Docker', 'MySQL', 'EC2']
    },
    {
        image: peopletap,
        title: 'People Tap Game',
        link: '',
        description:
            'A production-grade platform featuring real-time XP gain, active/idle income mechanics, skills, quests, and leaderboards. Built to validate backend patterns like event pipelines, ranking updates, and data consistency under concurrent writes.',
        tech: ['NestJS', 'RabbitMQ', 'MySQL', 'TypeORM', 'AWS EC2']
    },
    {
        image: blockblast,
        title: 'Block Blast-Inspired Mobile Game',
        link: '',
        description:
            'A mobile game prototype exploring rankings, virtual economy, and reward loops. Used as a sandbox for system design experiments around leaderboards, event tracking, and scalable backend integration.',
        tech: ['React Native', 'Unity', 'TypeScript', 'Firebase']
    }
]