import "./App.css";
import { AppRoutes } from "./Routes";
import { AuthProvider } from "./context/AuthUserProvider";
function App() {
  return (
    <>
      <div className="wrapper">
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
