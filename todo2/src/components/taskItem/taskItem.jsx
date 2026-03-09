// composant pour afficher une tâche

import styles from "./taskItem.module.css";
export const TaskItem = ({ task, editTask, deleteTask }) => {
    return (
        <li
            className={`${styles.container} ${task?.completed ? styles.sucess : styles.default
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
            <button
                className="button-primary"
                onClick={(e) => {
                    e.stopPropagation();
                    deleteTask(task.id);
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    style={{ width: "20px", height: "20px" }}
                >
                    <path d="M3 6h18v2H3V6zm2 3h14v12H5V9zM8 12v6h2v-6H8zm4 0v6h2v-6h-2z" />


                </svg>
            </button>
        </li>
    )
}