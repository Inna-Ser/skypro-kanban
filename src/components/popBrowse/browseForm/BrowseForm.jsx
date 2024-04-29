import classNames from "classnames";
import styles from "./BrowseForm.module.css";

export const BrowseForm = () => {
  return (
    <form
      className={classNames(styles.popBrowseForm, styles.formBrowse)}
      id="formBrowseCard"
      action="#"
    >
      <div className={styles.formBrowseBlock}>
        <label htmlFor="textArea01" className={styles.subttl}>
          Описание задачи
        </label>
        <textarea
          className={styles.formBrowseArea}
          name="text"
          id="textArea01"
          readOnly
          placeholder="Введите описание задачи..."
        ></textarea>
      </div>
    </form>
  );
};
