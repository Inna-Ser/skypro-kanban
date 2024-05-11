import classNames from "classnames";
import styles from "./Buttons.module.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { TaskContext } from "../protectedRoute/context/TaskProvider";
import { addTask } from "../../api/api";
import { UserContext } from "../protectedRoute/context/AuthUserProvider";

export const SaveButton = ({id}) => {
  const { user } = useContext(UserContext);
  const [taskData, setTaskData] = useState({
    title: "",
    topic: "",
    description: "",
    date: "",
    token: user?.user.token,
  });
  const {onEditTask} = useContext(TaskContext);
  return (
    <>
      <button
        className={classNames(
          styles.btnBrowseSave,
          styles.btnBor,
          styles.hover03
        )}
        onClick={() => onEditTask(id)}
      >
        {/* не нашла класс */}
        <Link>Сохранить</Link>
      </button>
    </>
  );
};

export const CancelButton = () => {
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
        <Link>Отменить</Link>
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

export const EditButton = () => {
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
        {/* не нашла класс */}
        <Link to="/edit">Редактировать задачу</Link>
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

