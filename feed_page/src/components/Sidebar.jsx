import styles from "./Sidebar.module.css";
import { PencilLine} from "phosphor-react"

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/JoaoDias61.png"/>
        <strong>João Pedro</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
            <PencilLine size={20}/>
            Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
