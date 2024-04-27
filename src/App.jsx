import "./App.css";
import { PopExit } from "./components/popExit/PopExit";
import { PopNewCard } from "./components/popNewCard/PopNewCard";
import { MainConteiner } from "./components/mainConteiner/MainConteiner";
import {PopBrowse} from "./components/popBrowse/PopBrowse";
import {Header} from "./components/header/Header";

function App() {

  return (
    <>
      <div className="wrapper">
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        <Header />
        <MainConteiner />
      </div>
    </>
  );
}

export default App;
