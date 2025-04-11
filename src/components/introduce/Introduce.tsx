/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './styles.module.sass'

import avatarPic from '@/public/avatar.jpeg'
import Icon from '@/src/components/icon'
import { IconTypes } from '@/src/components/icon/types'
import { experience, ExperienceType } from '@/src/data/experience'
import { update } from '@/update'

type FactType = {
    title?: string
    value?: string
}

type LinkType = {
    link: string
    label: string
    icon: IconTypes
}

const findEarliestDate = (experience: ExperienceType[]): string | undefined => {
    const allDates = experience
        .flatMap((exp) => exp.period)
        .map((dateStr) => new Date(dateStr))
        .filter((date) => !isNaN(date.getTime()))

    if (allDates.length === 0) {
        return undefined
    }

    const earliestDate = new Date(Math.min(...allDates.map((date) => date.getTime())))

    return earliestDate.toISOString().split('T')[0]
}

const divisor = 1000 * 60 * 60 * 24 * 365.2421897
const birthTime = new Date('1977-06-16T00:00:00').getTime()
const expTime = new Date(findEarliestDate(experience) ?? '1999-10-08T09:00:00').getTime()

export const Introduce: React.FC = () => {
    const [myAge, setMyAge] = React.useState<string>('')
    const [myExp, setMyExp] = React.useState<string>('')

    const dateUpdate = new Date(update).toLocaleDateString('en-us', {
        day: 'numeric',
        month: 'short',
        weekday: 'long',
        year: 'numeric'
    })

    const tick = () => {
        const ageCalc = ((Date.now() - birthTime) / divisor).toFixed(9)
        const expCalc = ((Date.now() - expTime) / divisor).toFixed(9)

        setMyAge(ageCalc)
        setMyExp(expCalc)
    }

    const factsList: FactType[] = [
        // {
        //     title: 'My age',
        //     value: myAge
        // },
        {
            title: 'Experience',
            value: myExp
        },
        {
            title: 'Location',
            value: 'Kuala Lumpur, Malaysia'
        },
        {
            title: 'Updated',
            value: dateUpdate
        }
    ]

    const linksList: LinkType[] = [
        {
            icon: 'github',
            label: 'GitHub',
            link: 'https://github.com/davelhw'
        },
        {
            icon: 'telegram',
            label: 'Telegram',
            link: 'https://t.me/dddddd999996'
        }
        // {
        //     icon: 'linkedin',
        //     label: 'LinkedIn',
        //     link: 'https://www.linkedin.com/in/mikcatsvill/'
        // }
    ]

    React.useEffect(() => {
        const timer = setInterval(() => tick(), 500)

        return () => clearInterval(timer)
    }, [])

    return (
        <section className={styles.introduceSection}>
            <div className={styles.avatarContainer}>
                <Image
                    src={avatarPic}
                    layout={'fill'}
                    objectFit={'cover'}
                    alt={'Hi I\'m - Dave Lim'}
                />
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        <h1>
                            {'Hi I\'m - '}
                            <span>{'Dave Lim'}</span>
                        </h1>

                        <div className={styles.links}>
                            {linksList?.map((item) => (
                                <Link
                                    key={`link-${item.link}`}
                                    href={item.link}
                                    title={item.label}
                                    target={'_blank'}
                                    className={styles.link}
                                >
                                    <Icon name={item.icon} />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <h3 className={styles.subTitle}>{'Software Engineer, Golfer'}</h3>
                </div>

                <ul className={styles.factsList}>
                    {factsList?.map(({ title, value }) => (
                        <li key={`fact-${title}`}>
                            <div className={styles.key}>{title}</div>
                            <div className={styles.value}>{value}</div>
                        </li>
                    ))}
                </ul>

                <div className={styles.description}>
                    <p>
                        {'I’m an old beginner in software development, '} <b>{'Fullstack Software Engineer'}</b>{' '}
                        {'specializing in scalable web applications, working across both'} <b>{'frontend'}</b> and{' '}
                        <b>{'backend'}</b>{' '}
                        {
                            'development. With a focus on delivering efficient and high-quality solutions, I manage and develop projects for clients in various industries.'
                        }
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Introduce
