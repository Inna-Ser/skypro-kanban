import classNames from "classnames";
import styles from "./PopExit.module.css";
import { Link } from "react-router-dom";

export const PopExit = () => {
  return (
    <div className={styles.popExit} id="popExit">
      <div className={styles.popExitContainer}>
        <div className={styles.popExitBlock}>
          <div className={styles.popExitTtl}>
            <h2>Выйти из аккаунта?</h2>
          </div>
          <form className={styles.popExitForm} id="formExit" action="#">
            <div className={styles.popExitFormGroup}>
              <button
                className={classNames(styles.popExitExitYes, styles.hover01)}
                id="exitYes"
              >
                <Link to="/login"> Да, выйти </Link>
              </button>
              <button
                className={classNames(styles.popExitExitNo, styles.hover03)}
                id="exitNo"
              >
                <Link to="/">Нет, остаться</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
