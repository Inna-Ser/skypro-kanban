import "./App.css";
import { PopExit } from "./components/popExit/PopExit";
import { PopNewCard } from "./components/popNewCard/PopNewCard";
import { PopBrowse } from "./components/popBrowse/PopBrowse";
import { Header } from "./components/header/Header";
import { MainContainer } from "./components/mainContainer/MainContainer";
import { cardList } from "./utils/data";
import { useState } from "react";

function App() {
  const [cards, setCards] = useState(cardList);

  const onCardAdd = () => {
    const newCard = {
      id: cards.length + 1, // Генерируем уникальный id для новой карточки
      theme: "Новая тема", // Устанавливаем тему новой задачи по умолчанию
      title: "Новая задача", // Устанавливаем заголовок новой задачи по умолчанию
      date: "30.10.23", // Устанавливаем дату новой задачи по умолчанию
      status: "Без статуса", // Устанавливаем статус "Без статуса" для новой задачи
    };
    setCards((prevCardList) => [newCard, ...prevCardList]);
  };
  return (
    <>
      <div className="wrapper">
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        <Header onCardAdd={onCardAdd} />
        <MainContainer cards={cards} />
      </div>
    </>
  );
}

export default App;
