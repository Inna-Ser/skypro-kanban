import classNames from "classnames";
import styles from "./HeaderNav.module.css";
import { User } from "../user/User";
import { Link } from "react-router-dom";

const NewTasks = ({ onCardAdd }) => {
  return (
    <button
      className={classNames(styles.headerBtnMainNew, styles.hover01)}
      id="btnMainNew"
      onClick={onCardAdd}
    >
      <Link to="/add-task">Создать новую задачу</Link>
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
