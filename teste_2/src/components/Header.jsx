import rocket from "../assets/rocket.svg"
import styles from "./Header.module.css"

export function Header() {
  return(
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.icon} src={rocket} alt="rocket icon" />
        <h1 className={styles.title}>ToDo</h1>
      </div>
    </header>
  )
}