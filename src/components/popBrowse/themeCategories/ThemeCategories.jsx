import classNames from "classnames";
import styles from "./ThemeCategories.module.css";
import { useContext } from "react";
import { TaskContext } from "../../protectedRoute/context/TaskProvider";
import { useParams } from "react-router-dom";

export const ThemeCategories = () => {
  const { id } = useParams();
  const { cards } = useContext(TaskContext);
  const card = cards.find((e) => e._id === id);
  return (
    <div
      className={classNames(
        styles.categoriesTheme,
        styles.orange,
        styles.activeCategory
      )}
    >
      <p className={styles.orange}>{card && <p>{card.topic}</p>}</p>
    </div>
  );
};
