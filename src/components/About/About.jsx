import Auth from '../../hoc/Auth';
import styles from './About.module.css';
function About() {
  return (
    <div className={styles.about}>
      <h1>About page</h1>
    </div>
  );
}

export default Auth(About);
