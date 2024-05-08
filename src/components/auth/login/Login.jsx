import { useContext, useState } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { signin } from "../../../api/api";
import classNames from "classnames";
import { UserContext } from "../../protectedRoute/context/AuthUserProvider";

export const Login = () => {
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      setIsSubmitting(false);
      return;
    }
    if (!password) {
      setError("Не заполнено 'Пароль'");
      setIsSubmitting(false);
      return;
    }
    signin({ login: email, password })
      .then((data) => {
        login({ data });
      })
      .finally(() => setIsSubmitting(false));
  };
  return (
    <div className={styles.login}>
      <div className={styles.loginBlock}>
        <form type={"submit"} className={styles.loginForm}>
          <div className={styles.inter}>
            <h1 className={styles.loginTitle}>Вход</h1>
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
          <div className={styles.loginLink}>
            Нужно зарегистрироваться?
            <Link
              className={classNames(styles.loginLink, styles.underLine)}
              to={"/registr"}
            >
              Зарегистрироваться
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
