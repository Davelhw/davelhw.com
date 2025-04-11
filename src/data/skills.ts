export const Frontend = {
    TypeScript: 'TypeScript',
    JavaScript: 'JavaScript',
    CSharp: 'C#',
    VBNet: 'VB.Net',
    NextJS: 'Next.js',
    jQuery: 'jQuery',
    HTML: 'HTML',
    CSS: 'CSS',
    SASS: 'SASS',
    Bootstrap: 'Bootstrap',
    TailwindCSS: 'Tailwind CSS'
} as const

export type FrontendSkillsType = (typeof Frontend)[keyof typeof Frontend]

export const Backend = {
    Python: 'Python',
    NodeJS: 'NodeJS',
    MySQL: 'MySQL',
    PostgreSQL: 'PostgreSQL',
    RestAPI: 'REST API',
    NestJS: 'NestJS',
    RabbitMQ: 'RabbitMQ',
    Redis: 'Redis',
    MongoDB: 'MongoDB',
    TypeORM: 'TypeORM',
    Prisma: 'Prisma'
} as const

export type BackendSkillsType = (typeof Backend)[keyof typeof Backend]

export const DevOps = {
    Git: 'Git',
    Docker: 'Docker',
    Linux: 'Linux',
    CentsOS: 'CentOS',
    Ubuntu: 'Ubuntu',
    GitHubActions: 'GitHub Actions'
} as const

// export type DevOpsSkillsType = (typeof DevOps)[keyof typeof DevOps]

// export const Testing = {
//     Playwright: 'Playwright',
//     RTL: 'React Testing Library',
//     Jest: 'Jest'
// } as const

// export type TestingSkillsType = (typeof Testing)[keyof typeof Testing]

// export const CMS = {
//     WordPress: 'WordPress',
//     Drupal: 'Drupal',
//     Joomla: 'Joomla'
// } as const

// export type CMSSkillsType = (typeof CMS)[keyof typeof CMS]

// export type SkillsType = FrontendSkillsType | BackendSkillsType | DevOpsSkillsType | TestingSkillsType | CMSSkillsType
export type SkillsType = FrontendSkillsType | BackendSkillsType
