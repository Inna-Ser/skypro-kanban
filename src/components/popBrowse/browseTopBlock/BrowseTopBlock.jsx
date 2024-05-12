import styles from "./BrowseTopBlock.module.css";
import { ThemeCategories } from "../themeCategories/ThemeCategories";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { TaskContext } from "../../protectedRoute/context/TaskProvider";

export const BrowseTopBlock = () => {
  const { id } = useParams();
  const { cards } = useContext(TaskContext);
  const card = cards.find((e) => e._id === id);
  return (
    <div className={styles.popBrowseTopBlock}>
      <h3 className={styles.popBrowseTtl}>
        {card ? card.title : "Loading..."}
      </h3>
      <ThemeCategories card={card} />
    </div>
  );
};
