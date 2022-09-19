import logo from "../../assets/Logo.png";
import styles from "./Header.module.css"

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Logo tipo do Ignite" />
        </header>
    );
}
