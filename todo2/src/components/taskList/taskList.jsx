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
 
        if (tasklist && tasklist.length > 0) { 
            return(
            <div className="box">

                <h2 className={styles.title}>
                    { incompleteTasks > 0 && (
                    <>Il te reste encore <span className="important">{incompleteTasks}</span> tâches à accomplir, courage</>
               
                )}

                {incompleteTasks === 0 && (
                    <>Tu es trop fort, t'as fini toutes tes tâches, tu peux aller te reposer</> 
                )}
                </h2>

                {taskslist && tasklist.length > 0 && (
                <ul className={styles.container}> 
                {tasklist}
                </ul>
                )}
            </div>
            )
        }
        
        return (
            <div className="box">
                { incompleteTasks > 0 && (
                    <h2 className={styles.title}>
                    Il te reste encore {incompleteTasks} tâches à accomplir, courage
                </h2>
                )
                }   
                <h2 className={styles.emptyState}>
                    Youpi, tu n'as plus de tâches à accomplir, tu peux aller te reposer
                </h2>
            </div>
        )
    }
