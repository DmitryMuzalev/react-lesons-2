import styles from './App.module.css';
import About from './components/About/About';
import Cars from './components/Cars/Cars';

function App() {
  return (
    <div className={styles.app}>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <a href="#link">Home</a>
          </li>
          <li>
            <a href="#link">About</a>
          </li>
        </ul>
      </nav>
      <About />
      <Cars />
    </div>
  );
}

export default App;
