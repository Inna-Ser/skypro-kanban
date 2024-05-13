import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import { CardsItem } from "../../cardsItem/CardsItem";
import styles from "./DraggableCard.module.css"

export const DraggableCard = ({ id, title, date, topic }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { id, type: ItemTypes.CARD },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} className={styles.cardsItem} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <CardsItem id={id} title={title} date={date} topic={topic} />
    </div>
  );
};
