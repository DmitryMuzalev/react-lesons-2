import styles from './AuthPage.module.css';

export default function AuthPage() {
  return (
    <div className="container">
      <div className={styles.auth}>
        <h2>Авторизация</h2>
        <form className={styles.authForm}>
          <label htmlFor="">
            Логин :
            <input type="email" autoFocus />
          </label>
          <label htmlFor="">
            Пароль :
            <input type="password" />
          </label>
          <div className={styles.authForm__btns}>
            <button type="submit">Войти</button>
            <button>Зарегистрироваться</button>
          </div>
        </form>
      </div>
    </div>
  );
}
