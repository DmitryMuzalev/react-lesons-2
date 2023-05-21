import { useEffect, useState } from 'react';
import styles from './Posts.module.css';
import { Link } from 'react-router-dom';
import Auth from '../../hoc/Auth';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  const renderPostsList = posts.map((post) => {
    return (
      <li key={post.id} className={styles.postsList__item}>
        <Link to={`/posts/${post.id}`} className={styles.postsList__link}>
          {post.title}
        </Link>
      </li>
    );
  });

  return (
    <div className="container">
      <ul className={styles.postsList}>{renderPostsList}</ul>
    </div>
  );
};

export default Auth(Posts);
