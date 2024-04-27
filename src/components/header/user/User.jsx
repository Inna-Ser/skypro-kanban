import classNames from "classnames";
import styles from "./User.module.css";

export const User = () => {
    return(
        <>
        <a
              href="#user-set-target"
              className={classNames(styles.headerUser, styles.hover02)}
            >
              Ivan Ivanov
            </a>
            <div
              className={classNames(styles.headerPopUserSet, styles.popUserSet)}
              id="user-set-target"
            >
              {/* <!-- <a href="">x</a> --> */}
              <p className={styles.popUserSetName}>Ivan Ivanov</p>
              <p className={styles.popSserSetMail}>ivan.ivanov@gmail.com</p>
              <div className={styles.popUserSetTheme}>
                <p>Темная тема</p>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  name="checkbox"
                />
              </div>
              <button type="button" className={styles.hover03}>
                <a href="#popExit">Выйти</a>
              </button>
            </div>
        </>
    )
}