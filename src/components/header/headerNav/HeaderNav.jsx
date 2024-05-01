import classNames from "classnames";
import styles from "./HeaderNav.module.css";
import { User } from "../user/User";

const NewTasks = ({ onCardAdd }) => {
  return (
    <button
      className={classNames(styles.headerBtnMainNew, styles.hover01)}
      id="btnMainNew"
      onClick={onCardAdd}
    >
      {/* <a href="#popNewCard">Создать новую задачу</a> */}
      Создать новую задачу
    </button>
  );
};

export const HeaderNav = ({ onCardAdd }) => {
  return (
    <nav className={styles.headerNav}>
      <NewTasks onCardAdd={onCardAdd} />
      <User />
    </nav>
  );
};
