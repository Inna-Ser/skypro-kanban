import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({
  user: true,
  login: () => {},
  logout: () => {},
  registr: () => {},
});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const registr = ({data}) => {
setUser(data);
navigate("/registr")
  }
  const login = ({ data }) => {
    setUser(data);
    navigate("/");
  };
  const logout = () => {
    setUser(null);
    navigate("/login");
  };
  return (
    <UserContext.Provider value={{ user, login, logout, registr }}>
      {children}
    </UserContext.Provider>
  );
};
