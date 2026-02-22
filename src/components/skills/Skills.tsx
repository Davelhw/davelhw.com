import React from 'react'

import Progress from '../progress'

import { data } from './data'
import styles from './styles.module.sass'

const Skills: React.FC = () => (
    <section>
        <div className={styles.skillContainer}>
            {data.map((group) => (
                <div key={group.group}
                    className={styles.skillGroup}>
                    <h3>{group.group}</h3>
                    <ul className={styles.skillList}>
                        {group.skills.map((skill) => (
                            <li key={`${group.group}-${skill.name}`}>
                                <div className={styles.label}>
                                    <label>{skill.name}</label>
                                </div>
                                <Progress value={skill.level} />
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </section>
)

export default Skills