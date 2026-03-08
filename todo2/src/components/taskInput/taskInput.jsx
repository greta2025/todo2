// champ de saisie
import styles from './taskInput.module.css';
import { useState } from "react";

export const TaskInput = ({ addTask }) => {
  const [taskTitle, setTastTitle] = useState('');
  const handleInputChange = (e) => {
    setTastTitle(e.target.value);
  }
  const handleAddTask = (e) => {
    e.preventDefault();
    addTask(taskTitle);
    setTastTitle('');
  }


    return (
      <div className={'box ${styles.element'}>
        <h2 className={styles.title}>Ecrire la prochaine tâche</h2>
        <form className={styles.containesr} onSubmit={handleAddTask}>
          <input 
            className={styles.input} 
            type="text" 
            placeholder="Ajouter une tâche" 
            onChange={handleInputChange} 
            /> 
          <button 
            className="button-primary"
            type="submit"> 
            Ajouter
        </button>
        </form>
        
      </div>
    );
};