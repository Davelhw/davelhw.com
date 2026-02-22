import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

import About from '@/src/components/about'
import Icon from '@/src/components/icon'
import { iconNames } from '@/src/components/icon/types'
import Introduce from '@/src/components/introduce'
import PageTransition from '@/src/components/page-transition'

const GithubActivity = dynamic(() => import('@/src/components/github-activity'), { ssr: false })

const MainPage: React.FC = () => (
    <>
        <NextSeo
            title={'Hi, I am Dave Lim - TypeScript Backend Architect & Technical Lead Fintech Systems | Scalable Infrastructure | Regulated Environments'}
            description={
                'I am a software engineer specializing in frontend and backend development for scalable web applications. With extensive experience in application development, testing, and managing both development teams and projects, I am focused on delivering high-quality and efficient solutions.'
            }
            openGraph={{
                images: [
                    {
                        height: 1333,
                        url: 'https://davelhw.com/avatar.jpeg',
                        width: 1000
                    }
                ],
                locale: 'en-US',
                siteName: 'davelhw.com'
            }}
        />

        <PageTransition>
            <Introduce />

            <About />

            <GithubActivity />

            <section className={'footerLinks'}>
                <Link
                    href={'/case-studies'}
                    title={'View my case studies'}
                >
                    {'Case Studies'}
                    <Icon name={iconNames.right} />
                </Link>
            </section>
        </PageTransition>
    </>
)

export default MainPage
