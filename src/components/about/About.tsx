import React from 'react'
import Image from 'next/image'

import photo from './photo.jpg'
import styles from './styles.module.sass'

/**
 * The About component displays information about the developer, including a photo and a brief description.
 *
 * @component
 * @example
 * return (
 *   <About />
 * )
 */
export const About: React.FC = () => (
    <section className={styles.aboutSection}>
        <h2 className={'pageTitle'}>{'About me'}</h2>
        <div className={styles.aboutContainer}>
            <Image
                src={photo}
                alt={'Photo of me'}
            />
            <div>
                <p>
                    {
                        'A passionate full-stack engineer who turns ideas into powerful systems — from RabbitMQ game pipelines to personal branding sites like this.'
                    }
                </p>
                <p>
                    {
                        'I build reliable, scalable systems in TypeScript, NestJS, RabbitMQ, and MySQL. Whether it’s architecting XP engines for gamified platforms or crafting secure admin interfaces with role-based access, I bring both experience and fire to every line of code. I believe in clean code, continuous learning, and creating systems people love to use.'
                    }
                </p>
                <p>
                    {
                        'I live by the mantra: Never stop learning until the end of your life — a lesson passed down from my grandmother and practiced daily in code, design, and leadership.'
                    }
                </p>
                <p>
                    <b>{'People have dreams, I have goals!'}</b>
                </p>
            </div>
        </div>
    </section>
)

export default About
