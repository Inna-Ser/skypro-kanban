import classNames from "classnames";
import styles from "./ThemeCategories.module.css";

export const ThemeCategories = () => {
  return (
    <div
      className={classNames(
        styles.categoriesTheme,
        styles.orange,
        styles.activeCategory
      )}
    >
      <p className={styles.orange}>Web Design</p>
    </div>
  );
};
