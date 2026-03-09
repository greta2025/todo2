// afficher header de l'app
import styles from './header.module.css';
import { FaTrash, FaEdit } from "react-icons/fa";
import { HiPencilSquare } from "react-icons/hi2";
export const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <HiPencilSquare style={{ width: "60px", height: "60px", color: "" }} />
                <div>
                    <h1> Liste des taches</h1>
                </div>
            </div>
        </div>
    );
};