import Clipboard from "../../assets/Clipboard.png";
import styles from "./TodoList.module.css"
import { BiTrash } from "react-icons/bi";
import { useState } from "react";

interface TodoListProps {
    content: string
    deleteTask: (task: string) => void;
}

export function TodoList({ content, deleteTask }: TodoListProps) {
    const [select, setSelect] = useState()
    console.log(select)
    function handleDeleteComment() {
        deleteTask(content);
      }
      const [line, setLine] = useState(false)
    return (
        <div className={styles.InputTasks}>
            <div className={styles.Tasks}>
                <input type="checkbox" />
                <p>{content}</p>
                <button title="Deletar task" onClick={handleDeleteComment}>
                    <BiTrash size="1.5rem" />
                </button>
            </div>
        </div>
    );
}
