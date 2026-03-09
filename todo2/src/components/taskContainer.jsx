// composant pour afficher les tâches
import { Header } from "./header/header";
import { TaskInput } from "./taskInput/taskInput";
import { TaskList } from "./taskList/taskList";
import { Footer } from "./footer/footer";
import { useState } from "react";

export const TaskContainer = () => {
    const [taskslist, setTaskslist] = useState([]); 

    const addTask = (title) => {
        const newTask = {
            id: taskslist.length + 1,
            title: title,
            completed: false
        };
        setTaskslist([...taskslist, newTask]);
    };

    const editTask = (id, completedvalue) => {
        setTaskslist(
            taskslist.map(task => 
            task.id === id ? { ...task, completed: completedvalue } : task
        ));
    };

    const deleteTask = (id) => {
        setTaskslist(taskslist.filter(task => task.id !== id));
    };

    const getTasksCount = () => {
        const completedTasks = taskslist.filter(task => task.completed).length;
        const incompleteTasks = taskslist.length - completedTasks;
        return { 
            completedTasks,
            incompleteTasks };
    }

    const { completedTasks, incompleteTasks } = getTasksCount();

    return (
        <main>
        <Header />
        <TaskInput addTask={addTask} />
        <TaskList 
        taskslist={taskslist}
        editTask={editTask}
        deleteTask={deleteTask}
        incompleteTasks={incompleteTasks} 
        />
        <Footer />
        </main>
    )
}