import React from 'react'

import styles from './styles.module.sass'

import { Backend, DevOps, Frontend } from '@/src/data/skills'

const SkillsCloud: React.FC = () => (
    <section>
        <ul className={styles.tagsCloud}>
            {[
                ...Object.values(Backend),
                ...Object.values(DevOps),
                ...Object.values(Frontend)
            ].map((item, i) => (
                <li key={`cloud-item-${i}`}>{item}</li>
            ))}
        </ul>
    </section>
)

export default SkillsCloud