import classNames from "classnames";
import styles from "./BrowseTopBlock.module.css";

export const BrowseTopBlock = () => {
  return (
    <div className={styles.popBrowseTopBlock}>
      <h3 className={styles.popBrowseTtl}>Название задачи</h3>
      <div
        className={classNames(
          styles.categoriesTheme,
          styles.themeTop,
          styles.orange,
          styles.activeCategory
        )}
      >
        <p className={styles.orange}>Web Design</p>
      </div>
    </div>
  );
};
