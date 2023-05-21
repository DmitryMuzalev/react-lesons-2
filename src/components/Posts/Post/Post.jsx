import { useNavigate, useParams } from 'react-router-dom';
import styles from './Post.module.css';
import { useEffect, useState } from 'react';

export default function Post() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  const onBack = () => navigate(-1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((postData) => setPost(postData));
  }, [postId]);

  return (
    <div className="container">
      <div className={styles.post}>
        {post && (
          <>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button style={{ alignSelf: 'end' }} onClick={onBack}>
              Назад
            </button>
          </>
        )}
      </div>
    </div>
  );
}
