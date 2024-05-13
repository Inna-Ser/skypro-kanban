import classNames from "classnames";
import styles from "./Buttons.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskProvider";

export const SaveButton = ({ id, taskData }) => {
  const { onEditTask } = useContext(TaskContext);
  return (
    <>
      <button
        className={classNames(
          styles.btnBrowseSave,
          styles.btnBor,
          styles.hover03
        )}
        onClick={() => onEditTask({ id, ...taskData })}
      >
        {/* не нашла класс */}
        <Link>Сохранить</Link>
      </button>
    </>
  );
};

export const CancelButton = ({ id }) => {
  return (
    <>
      <button
        className={classNames(
          styles.btnBrowseCancel,
          styles.btnBor,
          styles.hover03
        )}
      >
        {/* не нашла класс */}
        <Link to={`/browse/${id}`}>Отменить</Link>
      </button>
    </>
  );
};

export const DeleteButton = ({ id }) => {
  const { onDeleteTask } = useContext(TaskContext);
  return (
    <>
      <button
        className={classNames(
          styles.btnBrowseDelete,
          styles.btnBorDel,
          styles.del,
          styles.hover03
        )}
        onClick={() => onDeleteTask(id)}
      >
        {/* не нашла класс */}
        <div>
          <Link to="/">Удалить задачу</Link>
        </div>
      </button>
    </>
  );
};

export const EditButton = ({ id }) => {
  return (
    <>
      <button
        className={classNames(
          styles.btnBrowseDelete,
          styles.btnBorEdit,
          styles.del,
          styles.hover03
        )}
      >
        <Link to={`/edit/${id}`}>Редактировать задачу</Link>
      </button>
    </>
  );
};

export const CloseButton = () => {
  return (
    <>
      <button
        className={classNames(
          styles.btnBrowseClose,
          styles.btnBg,
          styles.hover01
        )}
      >
        {/* не нашла класс */}
        <Link to="/">Закрыть</Link>
      </button>
    </>
  );
};
