import { useContext, useState } from "react";
import { registration } from "../../../api/api";
import { UserContext } from "../../../context/AuthUserProvider";
import styles from "./Register.module.css";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames";

export const Register = () => {
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { registr } = useContext(UserContext);
  const navigate = useNavigate();

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
      setIsSubmitting(false);
      return;
    }
    if (!name) {
      setError("Не заполнено 'Имя'");
      setIsSubmitting(false);
      return;
    }
    if (!password) {
      setError("Не заполнено 'Пароль'");
      setIsSubmitting(false);
      return;
    }
    registration({ login: email, name, password })
      .then((data) => {
        registr({ data });
        navigate("/login");
      })
      .catch((error) => {
        setError((error.message = "Ошибка регистрации"));
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className={styles.login}>
      <div className={styles.loginBlock}>
        <form type={"submit"} className={styles.loginForm}>
          <div className={styles.inter}>
            <h1 className={styles.registrTitle}>Регистрация</h1>
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
          <div className={styles.linkRegistr}>
            Уже есть аккаунт?{" "}
            <Link
              className={classNames(styles.loginLink, styles.underLine)}
              to={"/login"}
            >
              Войдите здесь
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
