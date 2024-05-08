import classNames from "classnames";
import styles from "./StatusTheme.module.css";

export const StatusTheme = ({ status }) => {
  return (
    <div className={classNames(styles.statusTheme, styles.hide)}>{status}</div>
  );
};
