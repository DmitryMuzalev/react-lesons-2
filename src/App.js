import { NavLink, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Posts from './components/Posts/Posts';
import Post from './components/Posts/Post/Post';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

function App() {
  const setActive = ({ isActive }) => {
    return isActive ? 'active-link' : '';
  };

  return (
    <div className={styles.app}>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <NavLink to="/" className={setActive}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={setActive}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/posts" className={setActive}>
              Posts
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:postId" element={<Post />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
