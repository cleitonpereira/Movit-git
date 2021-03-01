import { useContext } from 'react';
import { ChallengeContext } from '../contents/ChallengesContext';
import styles from '../styles/components/Profile.module.css';
export function Profile() {
    const { level } = useContext(ChallengeContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/cleitonpereira.png" alt="Cleiton Pereira" />
            <div>
                <strong>Cleiton Pereira</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}