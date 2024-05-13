import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskProvider";
import { DraggableCard } from "../draggableCard/DraggableCard";

export const DroppableColumn = ({ title, cardList }) => {
  const { onDeleteTask } = useContext(TaskContext);
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item) => {
      console.log(`Перемещена карточка с id ${item.id} в колонку ${title}`);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <div ref={drop} className={styles.mainColumn}>
      <div className={styles.columnTitle}>
        <p>{title}</p>
      </div>
      <div className={styles.cards}>
        {cardList.map((item) => (
          <DraggableCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
