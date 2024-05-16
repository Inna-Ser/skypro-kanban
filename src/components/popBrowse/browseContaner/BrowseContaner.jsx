import classNames from "classnames";
import styles from "./BrowseContaner.module.css";
import { CloseButton, DeleteButton, EditButton } from "../../buttons/Buttons";
import { Calendar } from "../../calendar/Calendar";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { TaskContext } from "../../../context/TaskProvider";
import { topicStyles } from "../../../lib/DataTopic";

export const BrowseContaner = () => {
  const { id } = useParams();
  const { cards } = useContext(TaskContext);
  const card = cards.find((e) => e._id === id);

  return (
    <div className={styles.popBrowse} id="popBrowse">
      <div className={styles.popBrowseContainer}>
        <div className={styles.popBrowseBlock}>
          <div className={styles.popBrowseContent}>
            <div className={styles.popBrowseTopBlock}>
              <h3 className={styles.popBrowseTtl}>
                {card ? card.title : "Loading..."}
              </h3>
              <div
                className={classNames(
                  styles.categoriesTheme,
                  styles[topicStyles[card.topic]],
                  styles.activeCategory
                )}
              >
                <p className={styles[card.topic]}>{card.topic}</p>
              </div>
            </div>{" "}
            <div className={styles.popNewCardWrap}>
              <form
                className={classNames(styles.popBrowseForm, styles.formBrowse)}
                id="formBrowseCard"
                action="#"
              >
                <div className={styles.statusArea}>
                  <p className={styles.subttl}>Статус</p>
                  <label
                    className={classNames(styles.statusTheme, styles.active)}
                  >
                    {card.status}
                  </label>
                </div>
                <div className={styles.formBrowseBlock}>
                  <label htmlFor="textArea01" className={styles.subttl}>
                    Описание задачи
                  </label>
                  <textarea
                    className={styles.formBrowseArea}
                    type="text"
                    name="description"
                    id="textArea01"
                    readOnly
                    placeholder="Описание задачи..."
                    value={card.description}
                  ></textarea>
                </div>
              </form>
              <div className={styles.calendar}>
                <Calendar selected={card.date}/>
              </div>
            </div>
            <div className={styles.popBrowseBtnBrowse}>
              <div className={styles.btnGroup}>
                <EditButton id={id} />
                <DeleteButton id={id} />
                <CloseButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
