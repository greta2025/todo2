import styles from "./footer.module.css";
export const Footer = ({completedTasks}) => {
    if (completedTasks) {
        return (
        <footer>
           <code className={styles.footer}> 
           Tu as terminé {completedTasks} tâche
           {completedTasks > 1 ? "s" : ""} aujourd'hui,
           <br /> Félicitations !
            </code> 
        </footer>
    );
} 
return null;
}   