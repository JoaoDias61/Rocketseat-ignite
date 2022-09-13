import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/JoaoDias61.png"
          />
          <div className={styles.authorInfo}>
            <strong> João Pedro</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>
          Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa. É um
        </p>
        <p>
          projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto
          é
        </p>
        <p> DoctorCare 🚀</p>
        <p>
          <a href=""> 👉 jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedbackk</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div>
        <Comment className={styles.commentList}/>
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
