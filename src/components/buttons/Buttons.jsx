import classNames from "classnames";
import styles from "./Buttons.module.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { TaskContext } from "../protectedRoute/context/TaskProvider";
import { addTask } from "../../api/api";
import { UserContext } from "../protectedRoute/context/AuthUserProvider";

export const SaveButton = () => {
  const { user } = useContext(UserContext);
  const [taskData, setTaskData] = useState({
    title: "",
    topic: "",
    description: "",
    date: "",
    token: user?.user.token,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [selectDate, setSelectDate] = useState(null);
  // const [title, setTitle] = useState("");
  // const [description, setDiscription] = useState("");
  const { onCardAdd: addCard } = useContext(TaskContext);
  const { onEditTask } = useContext(TaskContext);

  //   const handl
  return (
    <>
      <button
        className={classNames(
          styles.btnBrowseSave,
          styles.btnBor,
          styles.hover03
        )}
        // onClick={toggleSave}
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

export const CreateButton = () => {
  const { user } = useContext(UserContext);
  const [taskData, setTaskData] = useState({
    title: "",
    topic: "",
    description: "",
    date: "",
    token: user?.user.token,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [selectDate, setSelectDate] = useState(null);
  // const [title, setTitle] = useState("");
  // const [description, setDiscription] = useState("");
  const { onCardAdd: addCard } = useContext(TaskContext);

 
  return (
    <>
      
    </>
  );
};
