// Projects.tsx
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { data } from './data'
import styles from './styles.module.sass'

import Icon from '@/src/components/icon'
import { iconNames } from '@/src/components/icon/types'
import PageTransition from '@/src/components/page-transition'
import { cn } from '@/src/utils/tools'

const Projects: React.FC = () => (
    <section className={styles.projectsContainer}>
        <PageTransition>
            {data?.map((item, i) => (
                <div
                    key={`project-${item.link}`}
                    className={cn(styles.item, styles[i % 2 === 0 ? 'even' : 'odd'])}
                >
                    <Link
                        href={item.link}
                        title={item.title}
                        target={'_blank'}
                    >
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={176}
                            height={176}
                        />
                    </Link>

                    <div className={styles.description}>
                      <div>
                          <h2>{item.title}</h2>
                          {item?.description && <p>{item.description}</p>}

                          <div className={styles.techList}>
                              {item.tech.map((techItem) => (
                                  <span key={`${item.title}-${techItem}`} 
                                  className={styles.techChip}>
                                      {techItem}
                                  </span>
                              ))}
                          </div>
                      </div>

                      <div className={styles.info}>
                          <Icon name={iconNames.web} />
                          <Link href={item.link}
                              title={item.title}
                              target={'_blank'}>
                              {item.link.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                          </Link>
                      </div>
                  </div>

                </div>
            ))}
        </PageTransition>
    </section>
)

export default Projects
