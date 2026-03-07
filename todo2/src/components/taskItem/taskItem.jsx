// composant pour afficher une tâche

import styles from "./taskItem.module.css";
export const TaskItem = ({ task }) => {
    return (
        <li className={`${styles.container} ${styles.default}`}>
            <div className={styles.item}>
                <div className={`${styles.id} ${styles.idDefault}`}>
                    numero de l'id
                </div>
                <div className={styles.contentDefault}>
                    Nom de la tâche
                </div>
            </div>
            <button className="button-primary">
                x
            </button>
        </li>
    )
}