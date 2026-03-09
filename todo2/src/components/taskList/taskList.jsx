    // compososant pour afficher la liste des tâches

    import { TaskItem } from "../taskItem/taskItem";
    import styles from "./taskList.module.css";

    export const TaskList = ({
        taskslist,
        editTask,
        deleteTask,
        incompleteTasks 
    }) => { 

        const tasklist = taskslist.map(task => (
            <TaskItem 
            key={task.id}
            task={task}
            editTask={editTask}
            deleteTask={deleteTask} 
            />
        ));
 
        return (
            <div className="box">
                <h2 className={styles.title}>Il te reste encore {incompleteTasks} tâches à accomplir, courage</h2>
                {taskslist && tasklist.length > 0 && (
                <ul className={styles.container}> 
                {tasklist}
                </ul>
                )}
            </div>
        )
    }