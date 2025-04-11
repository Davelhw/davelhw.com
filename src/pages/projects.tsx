import React from 'react'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

import Icon from '@/src/components/icon'
import { iconNames } from '@/src/components/icon/types'
import PageTransition from '@/src/components/page-transition'
import Projects from '@/src/components/projects'

const ProjectsPage: React.FC = () => (
    <>
        <NextSeo
            title={'My projects'}
            description={
                'This section showcases a selection of my personal projects, which I actively maintain and develop. As a passionate software engineer with a deep interest in programming, these projects reflect the intersection of my hobbies and technical expertise. The majority of these applications are built using modern web technologies like Nest.js, Vue3 and React.js, designed to be scalable, efficient, and user-friendly.'
            }
            openGraph={{
                images: [
                    {
                        height: 1333,
                        url: 'https://miksoft.pro/avatar.jpeg',
                        width: 1000
                    }
                ],
                locale: 'en-US'
            }}
        />

        <PageTransition>
            <section>
                <h1 className={'pageTitle'}>{'My projects'}</h1>
                <p>
                    {
                        'This section showcases a selection of my personal projects, which I actively maintain and develop. As a passionate software engineer with a deep interest in programming. The majority of these applications are built using modern web technologies like Nest.js, Vue3 and React.js, designed to be scalable, efficient, and user-friendly.'
                    }
                </p>
            </section>
        </PageTransition>

        <Projects />

        <PageTransition>
            <section className={'footerLinks'}>
                <Link
                    href={'/'}
                    title={'View about me'}
                >
                    <Icon name={iconNames.left} />
                    {'About me'}
                </Link>

                {/* <Link
                    href={'/experience'}
                    title={'View my experience'}
                >
                    {'Experience'}
                    <Icon name={iconNames.right} />
                </Link> */}
                <Link
                    href={'/skills'}
                    title={'View my technical skills'}
                >
                    {'Skills'}
                    <Icon name={iconNames.right} />
                </Link>
            </section>
        </PageTransition>
    </>
)

export default ProjectsPage
