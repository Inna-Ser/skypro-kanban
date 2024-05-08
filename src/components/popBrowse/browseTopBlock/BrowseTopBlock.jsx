import styles from "./BrowseTopBlock.module.css";
import { ThemeCategories } from "../themeCategories/ThemeCategories";

export const BrowseTopBlock = () => {
  return (
    <div className={styles.popBrowseTopBlock}>
      <h3 className={styles.popBrowseTtl}>Название задачи</h3>
      <ThemeCategories />
    </div>
  );
};
