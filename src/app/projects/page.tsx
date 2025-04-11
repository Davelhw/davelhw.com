// src/app/projects/page.tsx
'use client'
import ProjectCard from '@/components/ProjectCard'

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-10 text-blue-700">Projects</h1>

      <div className="grid gap-8 md:grid-cols-2">
        <ProjectCard
          title="People Tap Game"
          description="A RabbitMQ-powered idle tapping game with real-time XP gain, active/idle income mechanics, player skills, quests, and leaderboard rankings."
          tech={['NestJS', 'RabbitMQ', 'MySQL', 'TypeORM', 'AWS EC2']}
        />

        <ProjectCard
          title="XP Queue System"
          description="Scalable XP distribution service handling millions of tap events per day. Features auto-scaling, retry logic, delay queues, sharded consumers, and dead-letter handling."
          tech={['RabbitMQ', 'NestJS', 'Docker', 'MySQL', 'EC2']}
        />

        <ProjectCard
          title="Block Blast-Inspired Mobile Game"
          description="A block puzzle game in development — will feature regional/world rankings, diamond economy, power-ups, and video-reward monetization. Built with React Native and Unity (experimental)."
          tech={['React Native', 'Unity', 'TypeScript', 'Firebase']}
        />
      </div>
    </section>
  )
}
