import React from 'react'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

import Icon from '@/src/components/icon'
import { iconNames } from '@/src/components/icon/types'
import PageTransition from '@/src/components/page-transition'
import Projects from '@/src/components/projects'

const ProjectsPage: React.FC = () => {
    const pageTitle = 'Engineering Case Studies | Dave Lim'
    const pageDescription =
    'Backend architecture and distributed system case studies demonstrating scalable TypeScript/Node.js design, event-driven processing, and production-grade engineering discipline.'

    return (
        <>
            <NextSeo
                title={pageTitle}
                description={pageDescription}
                openGraph={{
                    images: [
                        {
                            height: 1333,
                            url: 'https://davelhw.com/avatar.jpeg',
                            width: 1000
                        }
                    ],
                    locale: 'en-US'
                }}
            />

            <PageTransition>
                <section>
                    <h1 className={'pageTitle'}>{pageTitle}</h1>
                    <p>{pageDescription}</p>
                </section>
            </PageTransition>

            <Projects />

            <PageTransition>
                <section className={'footerLinks'}>
                    <Link href={'/'}
                        title={'View about me'}>
                        <Icon name={iconNames.left} />
                        {'About me'}
                    </Link>

                    <Link href={'/skills'}
                        title={'View my technical skills'}>
                        {'Skills'}
                        <Icon name={iconNames.right} />
                    </Link>
                </section>
            </PageTransition>
        </>
    )
}

export default ProjectsPage