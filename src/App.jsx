import "./App.css";
import { AppRoutes } from "./Routes";
import { AuthProvider } from "./context/AuthUserProvider";

function App() {
  return (
    <>
      <div className="wrapper">
        <AuthProvider>
            {/* <PopExit />
        <PopNewCard />
        <PopBrowse />
        <Header onCardAdd={onCardAdd} />
        <MainContainer cards={cards} /> */}
            <AppRoutes />
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
