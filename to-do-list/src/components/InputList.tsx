import styles from "./InputList.module.css";
import { BiAddToQueue } from "react-icons/bi";
import { TodoList } from "./TodoList";

import { useState } from "react";

export function InputList() {
    const [taskNew, setNewTask] = useState('');
    const [task, setTask] = useState(['']);

    function handleCreateTask() {
        event?.preventDefault()
        setTask([...task, taskNew]);
        setNewTask('');
    }
    function deleteTask(commentToDelete: string) {
        const commentsWithoutDeletedOne = task.filter(comment => {
            return comment !== commentToDelete;
        })

        setTask(commentsWithoutDeletedOne);
    }

    return (
        <div>
            <div className={styles.Content}>
                <div className={styles.input}>
                    <form onSubmit={handleCreateTask}>
                        <textarea
                            onChange={e => setNewTask(e.target.value)}
                            value={taskNew}
                            required
                            placeholder="Adicione uma nova tarefa"
                        />
                        <button type="submit">
                            Criar
                            <div className={styles.iconButton}>
                                <BiAddToQueue size="1rem" />
                            </div>
                        </button>
                    </form>
                </div>
            </div>
            <div className={styles.TodoList}>
                <hr className={styles.Separator} />
                {
                    task.map(v => <TodoList content={v} deleteTask={deleteTask} />)
                }
            </div>
        </div>
    );
}
