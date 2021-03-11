import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export default function Profile() {

    const {level} = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/71559092?s=460&u=80073f835409a5692a8762e9c77871f3e8dc95ae&v=4" alt="Brayan Andrade" />
        <div>
            <strong>Brayan Andrade</strong>
           
            <p>
            <img src="icons/level.svg" alt="level" />
            Level {level}
            </p>
        </div>
        </div>
        
    )
}