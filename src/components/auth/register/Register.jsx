import { useContext, useState } from "react";
import { registration } from "../../../api/api";
import { UserContext } from "../../../context/AuthUserProvider";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";

export const Register = () => {
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  //   const [autocompleteOff, setAutocompleteOff] = useState(false);
  const { registr } = useContext(UserContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "name") {
      setName(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleRegistr = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    if (!email) {
      setError("Не заполнено 'Почта'");
      return;
    }
    if (!name) {
      setError("Не заполнено 'Имя'");
    }
    if (!password) {
      setError("Не заполнено 'Пароль'");
      return;
    }
    registration({ login: email, name, password }).then((data) => {
      registr({ data });
    });
  };
  // Здесь обычно будет вызов API для входа, но мы его имитируем
  // Предположим, что вход прошел успешно и мы устанавливаем пользователя в контекст

  // Перенаправляем пользователя на главную страницу
  return (
    <div className={styles.login}>
      <div className={styles.loginBlock}>
        <form type={"submit"} className={styles.loginForm}>
          <div className={styles.inter}>
            <h1>Регистрация</h1>
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
              type="text"
              name="name"
              placeholder="Имя"
              value={name}
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
            onClick={handleRegistr}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Регистрация..." : "Зарегистрироваться"}
          </button>
          <div>
            Уже есть аккаунт?
            <Link className={styles.loginLink} to={"/login"}>
              Войдите Здесь
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
