import styles from "./BrowseTopBlock.module.css";
import { ThemeCategories } from "../themeCategories/ThemeCategories";
import { useContext } from "react";
import { TaskContext } from "../../protectedRoute/context/TaskProvider";

export const BrowseTopBlock = () => {
  
  const { cards } = useContext(TaskContext);
  const selectedTask = cards.length > 0 ? cards[0] : null;

  const title = selectedTask ? selectedTask.title : "Выберите задачу";
  return (
    <div className={styles.popBrowseTopBlock}>
      <h3 className={styles.popBrowseTtl}>{title}</h3>
      <ThemeCategories />
    </div>
  );
};
