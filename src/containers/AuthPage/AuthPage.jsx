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

  return (
    <div className="container">
      <div className={styles.auth}>
        <h2>Авторизация</h2>
        <form className={styles.authForm} onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">
            Логин :
            <input
              type="email"
              autoFocus
              {...register('login', {
                required: 'Поле обязательно для заполнения ',
                pattern:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            {errors.login && (
              <p className={styles.errorMessage}>{errors.login.message}</p>
            )}
          </label>
          <label htmlFor="">
            Пароль :
            <input type="password" {...register('password')} />
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
