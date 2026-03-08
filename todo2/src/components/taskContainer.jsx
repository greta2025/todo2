// composant pour afficher les tâches
import { Header } from "./header/header";
import { TaskInput } from "./taskInput/taskInput";
import { TaskList } from "./taskList/taskList";
import { Footer } from "./footer/footer";
import { useState } from "react";

export const TaskContainer = () => {
    const [taskslist, setTaskslist] = useState([
    
    ]); 

    const addTask = (title) => {
        const newTask = {
            id: taskslist.length + 1,
            title: title,
            completed: false
        };
        setTaskslist([...taskslist, newTask]);
    };

    return (
        <main>
        <Header />
        <TaskInput addTask={addTask} />
        <TaskList />
        <Footer />
        </main>
    )
}