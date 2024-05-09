import classNames from "classnames";
import { statusList } from "../../../utils/cardItem";
import { BrowseTopBlock } from "../browseTopBlock/BrowseTopBlock";
import { StatusTheme } from "../stutusTheme/StatusTheme";
import styles from "./BrowseContaner.module.css";
import { CloseButton, DeleteButton, EditButton } from "../../buttons/Buttons";
import { Calendar } from "../../calendar/Calendar";
import { useParams } from "react-router-dom";

export const BrowseContaner = () => {
const {id} = useParams();
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
                      // value={}
                      readOnly
                      placeholder="Описание задачи..."
                    ></textarea>
                  </div>
                </form>
              </form>
              <Calendar />
            </div>
            <div className={styles.popBrowseBtnBrowse}>
              <div className={styles.btnGroup}>
                <EditButton />
                <DeleteButton id={id}/>
                <CloseButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
