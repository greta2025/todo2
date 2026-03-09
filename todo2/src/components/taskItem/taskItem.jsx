// composant pour afficher une tâche

import styles from "./taskItem.module.css";
export const TaskItem = ({ task, editTask, deleteTask }) => {
    return (
        <li 
        className={`${styles.container} ${
            task?.completed ? styles.sucess : styles.default
        }`}
            onClick={() => editTask(task.id, !task.completed)}
            >
            <div className={styles.item}>
                <div className={`${styles.id} ${task?.completed ? styles.idSucess : styles.idDefault}`}>
                {task.id}
                </div>
                <div className={task?.completed ? styles.contentSucess : styles.contentDefault
                    
                }>
                {task.title}    
                </div>
            </div>
            <button className="button-primary">
                x
            </button>
        </li>
    )
}