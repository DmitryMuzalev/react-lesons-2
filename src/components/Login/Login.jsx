import styles from './Login.module.css';
export default function Login({ isLogin, onToggleLogin }) {
  return (
    <div className={styles.login}>
      <h3>Login status: {isLogin ? 'TRUE' : 'FALSE'}</h3>
      <button onClick={onToggleLogin}>{isLogin ? 'Logout' : 'Login'} </button>
    </div>
  );
}
