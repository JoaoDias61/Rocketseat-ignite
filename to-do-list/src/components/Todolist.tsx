import styles from "./Todolist.module.css"

export function Todolist() {
    return (
        <div className={styles.input}>
            <input type="adicione uma nova tarefa" placeholder="Adicione uma nova tarefa" />
            <button placeholder="Criar"/>
        </div>
    );
}
