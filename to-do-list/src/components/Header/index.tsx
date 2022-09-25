import todoLogo from '../../../assets/Logo.png';
import { AiOutlinePlusCircle } from "react-icons/ai";
import styles from "./header.module.css";
import { FormEvent, useState } from 'react';

interface Props {
    onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {
    const [title, setTitle] = useState("");

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        onAddTask(title);
        setTitle("");
    }

    return (
        <header className={styles.header}>
            <img src={todoLogo} />

            <form onSubmit={handleSubmit} className={styles.newTaskForm}>
                <input
                    placeholder="Adicione uma nova tarefa"
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <button>
                    Criar
                    <AiOutlinePlusCircle size={20} />
                </button>
            </form>
        </header>
    );
}