import classNames from "classnames";
import styles from "./ThemeCategories.module.css";
import { useContext, useState } from "react";
import { TaskContext } from "../../protectedRoute/context/TaskProvider";
import { UserContext } from "../../protectedRoute/context/AuthUserProvider";

export const ThemeCategories = ({ topic }) => {
  return (
    <div
      className={classNames(
        styles.categoriesTheme,
        styles.orange,
        styles.activeCategory
      )}
    >
      <p className={styles.orange}>{topic}</p>
    </div>
  );
};
