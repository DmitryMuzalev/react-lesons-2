import { useForm } from 'react-hook-form';
import styles from './QuizCreator.module.css';
import Input from '../../components/UI/Input/Input';

export default function QuizCreator() {
  const { register, reset, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="container">
      <div className={styles.quizCreator}>
        <h2>Конструктор тестов</h2>
        <form
          className={styles.quizCreator__form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            id="question"
            register={register('question')}
            label="Вопрос :"
            placeholder="Сколько будет 2 + 2 ? "
          />
          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
}
