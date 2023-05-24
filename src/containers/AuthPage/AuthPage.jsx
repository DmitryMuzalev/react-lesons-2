import { useForm } from 'react-hook-form';
import styles from './AuthPage.module.css';

export default function AuthPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: 'onBlur' });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const emailValidationPatter =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordValidationPatter = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  return (
    <div className="container">
      <div className={styles.auth}>
        <h2>Авторизация</h2>
        <form className={styles.authForm} onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="login">
            Логин :
            <input
              type="email"
              placeholder="someone@example.com"
              autoFocus
              id="login"
              {...register('login', {
                required: 'Поле обязательно для заполнения ',
                pattern: {
                  value: emailValidationPatter,
                  message: 'Некорректный адрес электронной почты',
                },
              })}
            />
            {errors.login && (
              <p className={styles.errorMessage}>{errors.login.message}</p>
            )}
          </label>
          <label htmlFor="password">
            Пароль :
            <input
              id="password"
              type="password"
              placeholder="Your password..."
              {...register('password', {
                required: 'Поле обязательно для заполнения ',
                pattern: {
                  value: passwordValidationPatter,
                  message:
                    'Минимум 8 символов, минимум одна буква и одна цифра',
                },
              })}
            />
            {errors.password && (
              <p className={styles.errorMessage}>{errors.password.message}</p>
            )}
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
