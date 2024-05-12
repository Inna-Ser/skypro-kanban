import classNames from "classnames";
import styles from "./ThemeCategories.module.css";
import { topicStyles } from "../../../lib/DataTopic";

export const ThemeCategories = ({ topic }) => {
  return (
    <div
      className={classNames(
        styles.categoriesTheme,
        styles[topicStyles[topic]],
        styles.activeCategory
      )}
    >
      <p className={styles[topic]}>{topic}</p>
    </div>
  );
};
