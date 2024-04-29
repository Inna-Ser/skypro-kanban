import "./App.css";
import { PopExit } from "./components/popExit/PopExit";
import { PopNewCard } from "./components/popNewCard/PopNewCard";
import { PopBrowse } from "./components/popBrowse/PopBrowse";
import { Header } from "./components/header/Header";
import { MainContainer } from "./components/mainContainer/MainContainer";

function App() {
  return (
    <>
      <div className="wrapper">
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        <Header />
        <MainContainer />
      </div>
    </>
  );
}

export default App;
