import styles from "./BrowseTopBlock.module.css";
import { ThemeCategories } from "../themeCategories/ThemeCategories";
import { useState } from "react";

export const BrowseTopBlock = () => {
  const [taskData, setTaskData] = useState({
    title: "",
    topic: "",
    description: "",
    date: "",
  });
  return (
    <div className={styles.popBrowseTopBlock}>
      <h3 className={styles.popBrowseTtl}>{taskData.title}</h3>
      <ThemeCategories />
    </div>
  );
};
