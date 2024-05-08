import classNames from "classnames";
import styles from "./BrowseEdit.module.css";
import { BrowseTopBlock } from "../browseTopBlock/BrowseTopBlock";
import { statusList } from "../../../utils/cardItem";
import { StatusTheme } from "../stutusTheme/StatusTheme";
import { Calendar } from "../../calendar/Calendar";
import {
  CancelButton,
  CloseButton,
  DeleteButton,
  SaveButton,
} from "../../buttons/Buttons";
import { CalendarContent } from "../../calendarContent/CalendarContent";

export const BrowseEdit = () => {
  return (
    <div className="pop-browse" id="popBrowse">
      <div className={styles.popBrowseContainer}>
        <div className={styles.popBrowseBlock}>
          <div className={styles.popBrowseContent}>
            <BrowseTopBlock />
            <div className={classNames(styles.popBrowseStatus, styles.status)}>
              <p className={classNames(styles.statusP, styles.subttl)}>
                Статус
              </p>
              <div className={styles.statusThemes}>
                {statusList.map((status) => (
                  <StatusTheme key={status} title={status} />
                ))}
                {/* <div className="status__theme _gray">
                    <p className="_gray">Нужно сделать</p>
                  </div>
                  <div className="status__theme _hide">
                    <p>В работе</p>
                  </div>
                  <div className="status__theme _hide">
                    <p>Тестирование</p>
                  </div>
                  <div className="status__theme _hide">
                    <p>Готово</p>
                  </div> */}
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
                    ></textarea>
                  </div>
                </form>
              </form>
              <CalendarContent />
            </div>
          </div>

          <div className={styles.popBrowseBtnBrowse}>
            <div className={styles.btnGroup}>
              <SaveButton />
              <CancelButton />
              <DeleteButton />
              <CloseButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
