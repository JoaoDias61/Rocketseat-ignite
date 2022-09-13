import styles from "./Avatar.module.css";

export function Avatar({ hasBorderr = true, src}) {
  return (
    <img className={props.hasBorder ? styles.avatarWithBorder : styles.avatar} src={props.src} />
  );
}
