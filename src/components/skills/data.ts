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
        group: 'Frontend',
        skills: [
            {
                name: 'TypeScript',
                level: 70
            },
            {
                name: 'C#',
                level: 90
            },
            {
                name: 'MS VB.Net, VB6',
                level: 80
            },
            {
                name: 'Vue.js',
                level: 70
            }
        ]
    },
    {
        group: 'Backend',
        skills: [
            {
                name: 'Node.js',
                level: 70
            },
            {
                name: 'Nest.js',
                level: 70
            },
            {
                name: 'Microsoft .Net C#',
                level: 80
            },
            {
                name: 'MSSQL & MYSQL',
                level: 90
            }
        ]
    }
]
