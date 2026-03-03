import { StaticImageData } from 'next/image'

import blockblast from './images/block-blast.png'
// 👉 Add image later
import commission from './images/commission-rule-engine.png'
import peopletap from './images/people-tap-game.png'
import securegpt from './images/secure-gpt-gateway.png'
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
        image: securegpt,
        title: 'Secure GPT Gateway (AI Governance Control Plane)',
        link: 'https://github.com/Davelhw/secure-gpt-gateway',
        description:
            'An enterprise-grade LLM mediation layer designed to enforce policy, audit AI interactions, and provide deterministic control over external language model usage. Implements versioned rule bundles, transactional activation, idempotent request handling, structured audit logging, and provider-agnostic LLM abstraction to simulate production-grade AI governance in regulated environments.',
        tech: ['NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'RBAC', 'Docker']
    },
    {
        image: commission,
        title: 'Commission Rule Engine (In Development)',
        link: 'https://github.com/Davelhw/Ant-Colony-Commission-Engine',
        description:
            'A configurable financial calculation engine modeling hierarchical payouts, rank qualification, and deterministic cut-off processing. Designed with modular rule sequencing, idempotent batch execution, and audit-ready payout generation to simulate production-grade settlement systems.',
        tech: ['NestJS', 'TypeScript', 'MySQL', 'Batch Processing', 'Docker']
    },
    {
        image: xpqueue,
        title: 'XP Queue System',
        link: '',
        description:
            'An event-driven backend service engineered to process high-volume activity streams and distribute XP deterministically at scale. Implements idempotent consumers, delayed retries, sharding strategies, and Dead Letter Queue (DLQ) handling to maintain throughput stability under burst traffic. Designed with message durability, back-pressure awareness, and failure isolation to simulate production-grade distributed processing patterns.',
        tech: ['RabbitMQ', 'NestJS', 'Docker', 'MySQL', 'EC2']
    },
    {
        image: peopletap,
        title: 'People Tap Game',
        link: '',
        description:
            'A production-grade backend platform featuring real-time XP accrual, active/idle income mechanics, skill trees, quest systems, and competitive leaderboards. Designed to validate event-driven pipelines, ranking recalculation strategies, and data consistency under concurrent writes. Emphasizes deterministic state transitions, eventual consistency trade-offs, and scalable progression modeling for high-engagement systems.',
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