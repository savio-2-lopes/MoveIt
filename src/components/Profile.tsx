import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/savio-2-lopes.png" alt="Savio Lopes" />
            <div>
                <strong> Savio Lopes</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />Level 1
                </p>
            </div>
        </div>
    )
}