type SkillItemType = {
    name: string
    level: number
}

type SkillGroupType = {
    group: string
    skills: SkillItemType[]
}

export const data: SkillGroupType[] = [
    {
        group: 'Backend & Architecture',
        skills: [
            { name: 'TypeScript', level: 85 },
            { name: 'Node.js', level: 80 },
            { name: 'NestJS', level: 80 },
            { name: 'MSSQL / MySQL', level: 90 },
            { name: 'C# / .NET', level: 80 },
            { name: 'API Design', level: 85 },
            { name: 'System Design', level: 80 }
        ]
    },
    {
        group: 'Frontend (Collaboration)',
        skills: [
            { name: 'Vue.js', level: 70 },
            { name: 'React / Next.js', level: 55 },
            { name: 'HTML / CSS', level: 65 }
        ]
    },
    {
        group: 'Platform & Production',
        skills: [
            { name: 'AWS', level: 75 },
            { name: 'Docker', level: 70 },
            { name: 'CI/CD (GitHub Actions)', level: 65 },
            { name: 'Linux', level: 70 },
            { name: 'Git', level: 70 },
            { name: 'Ubuntu', level: 65 },
            { name: 'CentOS', level: 60 }
        ]
    }
]