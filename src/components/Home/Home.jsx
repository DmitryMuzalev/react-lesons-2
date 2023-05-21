import Auth from '../../hoc/Auth';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
      <h1>Home page</h1>
    </div>
  );
}

export default Auth(Home);
