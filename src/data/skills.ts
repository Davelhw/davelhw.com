export const Backend = {
    TypeScript: 'TypeScript',
    NodeJS: 'Node.js',
    NestJS: 'NestJS',
    RestAPI: 'REST API',
    MySQL: 'MySQL',
    PostgreSQL: 'PostgreSQL',
    RabbitMQ: 'RabbitMQ',
    Redis: 'Redis',
    Prisma: 'Prisma',
    DotNet: 'C# / .NET'
} as const

export type BackendSkillsType = (typeof Backend)[keyof typeof Backend]

export const DevOps = {
    AWS: 'AWS',
    Docker: 'Docker',
    GitHubActions: 'GitHub Actions',
    Linux: 'Linux',
    Git: 'Git'
} as const

export type DevOpsSkillsType = (typeof DevOps)[keyof typeof DevOps]

export const Frontend = {
    React: 'React',
    NextJS: 'Next.js',
    VueJS: 'Vue.js'
} as const

export type FrontendSkillsType = (typeof Frontend)[keyof typeof Frontend]

export type SkillsType =
    | BackendSkillsType
    | DevOpsSkillsType
    | FrontendSkillsType