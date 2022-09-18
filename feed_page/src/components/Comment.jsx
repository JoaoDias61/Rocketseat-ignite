import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import { useState } from "react";
import styles from "./Comment.module.css";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikedComment(){
    setLikeCount(likeCount + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder src="https://github.com/JoaoDias61.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>João Pedro</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
                cerca de uma hora atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikedComment}>
            <ThumbsUp />
            Aplaudir <span>- {likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
