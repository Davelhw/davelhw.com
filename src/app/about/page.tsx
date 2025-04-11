// src/app/about/page.tsx
export default function AboutPage() {
    return (
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6 text-blue-700">About Me</h1>
  
        <p className="text-lg text-gray-700 mb-6">
          Hi, I’m <strong>Dave Lim</strong> — a full-stack engineer with over two decades of experience since 1999. I’m passionate about solving real-world problems through software, and I’ve spent my career building systems across a variety of platforms and tech stacks.
        </p>
  
        <p className="text-lg text-gray-700 mb-6">
          My journey began with VB6 and MSSQL 6.5. Over the years, I’ve evolved my skills through .NET and C#, eventually falling in love with the flexibility and power of TypeScript, NestJS, and modern JavaScript frameworks.
        </p>
  
        <p className="text-lg text-gray-700 mb-6">
          I’m currently the lead backend architect of the <strong>People Tap Game</strong> — a high-concurrency RabbitMQ-based gaming platform with advanced skill logic, idle/active income tracking, player progression, and real-time XP processing.
        </p>
  
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-blue-600">Core Values</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
          <li><strong>Never stop learning</strong> — a life philosophy taught by my grandmother and lived every day.</li>
          <li><strong>Love what you do</strong> — advice from my father that shaped how I approach challenges.</li>
          <li><strong>Understand the good and the bad</strong> — to grow, protect, and lead wisely.</li>
        </ul>
  
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-blue-600">Experience & Skills</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
          <li>TypeScript, NestJS, Next.js, RabbitMQ, MySQL, Docker</li>
          <li>Multi-database architecture with Prisma and TypeORM</li>
          <li>AWS EC2 + RDS, OAuth integrations, secure JWT/2FA auth</li>
          <li>Leader of People Tap Game backend + RBAC admin system</li>
        </ul>
      </section>
    );
  }
  