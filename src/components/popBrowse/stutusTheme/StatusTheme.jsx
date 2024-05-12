import classNames from "classnames";
import styles from "./StatusTheme.module.css";

export const StatusTheme = ({ status, onChange, currentStatus }) => {
  return (
    <label
      className={classNames(styles.statusTheme, {
        [styles.active]: currentStatus === status,
      })}
    >
      <input type="radio" value={status} onChange={onChange} name="status" />
      {status}
    </label>
  );
};
