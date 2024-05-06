import { useContext, useState } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context/AuthUserProvider";
import { signin } from "../../../api/api";

export const Login = () => {
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [autocompleteOff, setAutocompleteOff] = useState(false);
  const { login } = useContext(UserContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    if (!email) {
      setError("Не заполнено 'Почта'");
      return;
    }
    if (!password) {
      setError("Не заполнено 'Пароль'");
      return;
    }
    signin({ login: email, password })
    .then((data) => {
        login({ data });

    });
    // Здесь обычно будет вызов API для входа, но мы его имитируем
    // Предположим, что вход прошел успешно и мы устанавливаем пользователя в контекст

    // Перенаправляем пользователя на главную страницу
  };
  return (
    <div className={styles.login}>
      <div className={styles.loginBlock}>
        <form type={"submit"} className={styles.loginForm}>
          <div className={styles.inter}>
            <h1>Вход</h1>
          </div>
          <div className={styles.loginBoxInput}>
            <input
              className={styles.loginInput}
              type="text"
              name="email"
              placeholder="Почта"
              value={email}
              onChange={handleInputChange}
              autoComplete="off"
            ></input>
            <input
              className={styles.loginInput}
              type="password"
              name="password"
              placeholder="Пароль"
              value={password}
              onChange={handleInputChange}
              autoComplete="off"
            ></input>
          </div>
          {error && <div className={styles.registrError}>{error}</div>}
          <button
            className={styles.loginButton}
            type={"submit"}
            onClick={handleLogin}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Вход..." : "Войти"}
          </button>
          <div>
            Нужно Зарегистрироваться?
            <Link className={styles.loginLink} to={"/registr"}>
              Зарегистрироваться
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
