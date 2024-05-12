import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

export const Calendar = ({ onSelectDate, selected }) => {
  // const [selected, setSelected] = useState();
  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}</p>;
    // onSelectDate(selected);
  }
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={onSelectDate}
      footer={footer}
    />
  );
};
