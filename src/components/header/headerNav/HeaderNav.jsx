import classNames from "classnames"
import styles from "./HeaderNav.module.css"
import { User } from "../user/User"

const NewTasks = () => {
    return(
        <button
              className={classNames(styles.headerBtnMainNew, styles.hover01)}
              id="btnMainNew"
            >
              <a href="#popNewCard">Создать новую задачу</a>
            </button>
    )
}



export const HeaderNav = () => {
    return(
        <nav className={styles.headerNav}>
            <NewTasks />
            <User />
          </nav>
    )
}