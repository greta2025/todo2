import styles from "./footer.module.css";
export const Footer = () => {
    return (
        <footer>
           <code className={styles.footer}> 
           Tu as terminé x tâches
           <br /> Félicitations !
            </code> 
        </footer>
    );
}   