import { useContext, useState } from "react";
import { Calendar } from "../calendar/Calendar";
import classNames from "classnames";
import styles from "./PopNewCard.module.css";
import { Link } from "react-router-dom";
import { TaskContext } from "../../context/TaskProvider";
import { UserContext } from "../../context/AuthUserProvider";

export const PopNewCard = () => {
  const { user } = useContext(UserContext);
  const [taskData, setTaskData] = useState({
    title: "",
    topic: "",
    description: "",
    date: "",
    token: user?.user.token,
  });
  const [, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const { onCardAdd: addCard } = useContext(TaskContext);

  const onChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleDateSelect = (date) => {
    setTaskData((prevTaskDate) => ({
      ...prevTaskDate,
      date: date.toISOString(),
    }));
  };

  const handleCardAdd = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    if (!taskData.title) {
      setError("Не заполнено 'Название'");
      setIsSubmitting(false);
      return;
    }
    if (!taskData.description) {
      setError("Не заполнено 'Описание'");
      setIsSubmitting(false);
      return;
    }
    try {
      addCard(taskData);
    } catch (error) {
      console.error("Ошибка при добавлении задачи:", error.message);
      setError("Ошибка при добавлении задачи. Пожалуйста, попробуйте еще раз.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className={styles.popNewCard} id="popNewCard">
      <div className={styles.popNewCardContainer}>
        <div className={styles.popNewCardBlock}>
          <div className={styles.popNewCardContent}>
            <h3 className={styles.popNewCardTtl}>Создание задачи</h3>
            <Link to="/" className={styles.popNewCardClose}>
              &#10006;
            </Link>
            <div className={styles.popNewCardWrap}>
              <div
                className={classNames(styles.popNewCardForm, styles.formNew)}
                id="formNewCard"
                action="#"
              >
                <div className={styles.formNewBlock}>
                  <label htmlFor="formTitle" className={styles.subttl}>
                    Название задачи
                  </label>
                  <input
                    className={styles.formNewInput}
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    value={taskData.title}
                    onChange={onChange}
                  />
                </div>

                <form
                  className={classNames(
                    styles.popBrowseForm,
                    styles.formBrowse
                  )}
                  id="formBrowseCard"
                  action="#"
                >
                  <div className={styles.formBrowseBlock}>
                    <label htmlFor="textArea01" className={styles.subttl}>
                      Описание задачи
                    </label>
                    <textarea
                      className={styles.formBrowseArea}
                      type="text"
                      name="description"
                      id="textArea01"
                      placeholder="Введите описание задачи..."
                      value={taskData.description}
                      onChange={onChange}
                    ></textarea>
                  </div>
                </form>
              </div>
              <Calendar
                onSelectDate={handleDateSelect}
                selected={taskData.date}
              />
            </div>
            {error && <p className={styles.error}>{error}</p>}
            <div
              className={classNames(
                styles.popNewCardCategories,
                styles.categories
              )}
            >
              <p className={classNames(styles.categoriesP, styles.subttl)}>
                Категория
              </p>
              <div className={styles.categoriesThemes}>
                <div
                  className={
                    taskData.topic === "Web Design"
                      ? classNames(
                          styles.categoriesTheme,
                          styles.orange,
                          styles.activeCategory
                        )
                      : classNames(styles.categoriesTheme, styles.orange)
                  }
                >
                  <label className={styles.orange}>
                    Web Design
                    <input
                      className={styles.inputStatus}
                      name="topic"
                      type="radio"
                      value="Web Design"
                      checked={taskData.topic === "Web Design"}
                      onChange={onChange}
                    />
                  </label>
                </div>
                <div
                  className={
                    taskData.topic === "Research"
                      ? classNames(
                          styles.categoriesTheme,
                          styles.green,
                          styles.activeCategory
                        )
                      : classNames(styles.categoriesTheme, styles.green)
                  }
                >
                  <label className={styles.green}>
                    Research
                    <input
                      className={styles.inputStatus}
                      name="topic"
                      type="radio"
                      value="Research"
                      checked={taskData.topic === "Research"}
                      onChange={onChange}
                    />
                  </label>
                </div>
                <div
                  className={
                    taskData.topic === "Copywriting"
                      ? classNames(
                          styles.categoriesTheme,
                          styles.purple,
                          styles.activeCategory
                        )
                      : classNames(styles.categoriesTheme, styles.purple)
                  }
                >
                  <label className={styles.purple}>
                    Copywriting
                    <input
                      className={styles.inputStatus}
                      name="topic"
                      type="radio"
                      value="Copywriting"
                      checked={taskData.topic === "Copywriting"}
                      onChange={onChange}
                    />
                  </label>
                </div>
              </div>
            </div>
            <button
              className={classNames(styles.formNewCreate, styles.hover01)}
              id="btnCreate"
              onClick={handleCardAdd}
            >
              Создать задачу
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
