import styles from "./BrowseTopBlock.module.css";
import { ThemeCategories } from "../themeCategories/ThemeCategories";

export const BrowseTopBlock = ({ card }) => {
  return (
    <div className={styles.popBrowseTopBlock}>
      <h3 className={styles.popBrowseTtl}>{card ? card.title : 'Loading...'}</h3>
      <ThemeCategories />
    </div>
  );
};
