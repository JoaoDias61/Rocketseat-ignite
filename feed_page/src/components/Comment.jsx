import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.modules.css";

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/JoaoDias61.png"/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>João Pedro</strong>
                            <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">cerca de uma hora atrás</time>

                        </div>
                        <button title="Deletar comentário">
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>Parabéns, meu bom</p>
                </div>
                <footer>
                    <ThumbsUp />
                    Aplaudir  <span>20</span>
                </footer>
            </div>

        </div>
    );
}