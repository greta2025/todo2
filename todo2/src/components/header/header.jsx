// afficher header de l'app
import styles from './header.module.css';
import reactLogo from '../../assets/react.svg';
export const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <img src={reactLogo} alt="logo" width={50} height={50}/>
                <div>
                    <h1> Liste des taches</h1>
                    <div className="color-gray"> 
                        <code> Suivre le flux </code>
                    </div>
                </div>

            </div>
            <code className="color-primary">
                version test de l'application 
            </code>
        </div>
    );
};