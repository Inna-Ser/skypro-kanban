import classNames from "classnames";
import styles from "./BrowseEdit.module.css";
import { statusList } from "../../../utils/cardItem";
import { StatusTheme } from "../stutusTheme/StatusTheme";
import { Calendar } from "../../calendar/Calendar";
import {
  CancelButton,
  CloseButton,
  DeleteButton,
  SaveButton,
} from "../../buttons/Buttons";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { TaskContext } from "../../../context/TaskProvider";
import { UserContext } from "../../../context/AuthUserProvider";

export const BrowseEdit = () => {
  const { id } = useParams();
  const { cards } = useContext(TaskContext);
  const card = cards.find((e) => e._id === id);
  const { user } = useContext(UserContext);
  const [taskData, setTaskData] = useState({
    title: card.title,
    topic: card.topic,
    status: card.status,
    description: card.description,
    token: user?.user.token,
  });
  const [selected, setSelected] = useState(card.date);

  const onChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  return (
    <div className="pop-browse" id="popBrowse">
      <div className={styles.popBrowseContainer}>
        <div className={styles.popBrowseBlock}>
          <div className={styles.popBrowseContent}>
            <div className={styles.popBrowseTopBlock}>
              <h3 className={styles.popBrowseTtl}>{taskData.title}</h3>
              <div
                className={classNames(
                  styles.categoriesTheme,
                  styles.orange,
                  styles.activeCategory
                )}
              >
                <p className={styles.orange}>{card.topic}</p>
              </div>
            </div>{" "}
            <div className={classNames(styles.popBrowseStatus, styles.status)}>
              <p className={classNames(styles.statusP, styles.subttl)}>
                Статус
              </p>
              <div className={styles.statusThemes}>
                {statusList.map((status) => (
                  <StatusTheme
                    key={status}
                    status={status}
                    onChange={onChange}
                    currentStatus={taskData.status}
                  />
                ))}
              </div>
            </div>
            <div className={styles.popNewCardWrap}>
              <form
                className={classNames(styles.popNewCardForm, styles.formNew)}
                id="formNewCard"
                action="#"
              >
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
              </form>
              <Calendar selected={selected} onSelectDate={setSelected} />
            </div>
          </div>

          <div className={styles.popBrowseBtnBrowse}>
            <div className={styles.btnGroup}>
              <SaveButton id={id} taskData={{ ...taskData, date: selected }} />
              <CancelButton id={id} />
              <DeleteButton id={id} />
              <CloseButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
