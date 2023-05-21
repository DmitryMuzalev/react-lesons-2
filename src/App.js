import { NavLink, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Posts from './components/Posts/Posts';
import Post from './components/Posts/Post/Post';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import { useState } from 'react';
import Login from './components/Login/Login';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const onToggleLogin = () => {
    setIsLogin((prev) => !prev);
  };
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
          <li>
            <NavLink to="/login" className={setActive}>
              {isLogin ? 'Logout' : 'Login'}
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home isLogin={isLogin} />} />
        <Route path="/about" element={<About isLogin={isLogin} />} />
        <Route path="/posts" element={<Posts isLogin={isLogin} />} />
        <Route path="/posts/:postId" element={<Post />} />
        <Route
          path="/login"
          element={<Login isLogin={isLogin} onToggleLogin={onToggleLogin} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
