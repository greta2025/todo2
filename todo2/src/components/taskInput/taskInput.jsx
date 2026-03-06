// champ de saisie
import styles from './taskInput.module.css';
export const TaskInput = () => {
    return (
      <div className={'box ${styles.element'}>
        <h2 className={styles.title}>Ecrire la prochaine tâche</h2>
        <form className={styles.containesr}>
          <input 
            className={styles.input} 
            type="text" 
            placeholder="Ajouter une tâche" />
          <button 
            className="button-primary"
            type="submit"> 
            Ajouter
        </button>
        </form>
        
      </div>
    );
};