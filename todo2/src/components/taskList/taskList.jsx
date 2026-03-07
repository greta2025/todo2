    // compososant pour afficher la liste des tâches

    import styles from "./taskList.module.css";

    export const TaskList = () => {
        return (
            <div className="box">
                <h2 className={styles.title}>Il te reste encore x tâches à accomplir, courage</h2>
                <ul className={styles.container}> 
                    Composant taskItem ici
                </ul>
            </div>
        )
    }