import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({
  user: true,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const login = ({ value }) => {
    setUser(value);
    navigate("/");
  };
  const logout = () => {
    setUser(null);
    navigate("/login");
  };
  return (
    <UserContext.Provider vaiue={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
