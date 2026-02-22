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
            <Image src={photo}
alt={'Photo of me'} />

            <div>
                <p>
                    {
                        'I’m a TypeScript backend architect and hands-on technical lead focused on building secure, scalable systems for enterprise and regulated environments.'
                    }
                </p>

                <p>
                    {
                        'My engineering foundation was shaped by long-running production work where governance, auditability, and data integrity matter. I design backend services and APIs, model databases thoughtfully, and build systems that stay maintainable as they scale.'
                    }
                </p>

                <p>
                    {
                        'Technically, I work primarily with TypeScript, Node.js, NestJS, relational databases (MySQL/PostgreSQL), and event-driven patterns (RabbitMQ/Redis). I also collaborate closely with frontend teams (React/Next.js) to ensure end-to-end delivery stays clean and predictable.'
                    }
                </p>

                <p>
                    {
                        'I believe great systems come from clear architecture, disciplined execution, and continuous learning — a principle I’ve carried for years in both engineering and leadership.'
                    }
                </p>

                <p>
                    <b>{'I’m goal-driven, but I value outcomes and discipline over hype.'}</b>
                </p>
            </div>
        </div>
    </section>
)

export default About